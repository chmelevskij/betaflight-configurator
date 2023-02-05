
async function* streamAsyncIterable(stream) {
    const reader = stream.getReader();
    try {
        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                return;
            }
            yield value;
        }
    } finally {
        // TODO: check that it doesn't clash with the close method
        reader.releaseLock();
    }
}

export const serial = {
    connected: false,
    connectionId: false,
    openRequested: false,
    openCanceled: false,
    bitrate: 0,
    bytesReceived: 0,
    bytesSent: 0,
    failed: 0,

    transmitting: false,

    logHead: "SERIAL: ",

    port: null,
    writer: null,
    reader: null,

    async connect(options, callback) {
        this.openRequested = true;
        this.logHead = "SERIAL: ";

        this.port = await navigator.serial.requestPort();

        await this.port.open(options);
        const connectionInfo = this.port.getInfo();
        this.writer = this.port.writable.getWriter();

        if (connectionInfo && !this.openCanceled) {
            this.connected = true;
            this.connectionId = connectionInfo.connectionId;
            this.bitrate = options.baudrate;
            this.bytesReceived = 0;
            this.bytesSent = 0;
            this.failed = 0;
            this.openRequested = false;

            this.onReceive.addListener((info) => {
                this.bytesReceived += info.data.byteLength;
            });

            console.log(
                `SERIAL: Connection opened with ID: ${
                    connectionInfo.connectionId
                    }, Baud: ${
                    connectionInfo.bitrate}`,
            );

            if (callback) callback(connectionInfo);

            // TODO: try/catch
            for await (let value of streamAsyncIterable(this.port.readable)) {
                // TODO: better notify
                this.onReceive.listeners.forEach((l) => l({ data: value }));
            }
        } else if (connectionInfo && this.openCanceled) {
            // connection opened, but this connect sequence was canceled
            // we will disconnect without triggering any callbacks
            this.connectionId = connectionInfo.connectionId;
            console.log(
                `SERIAL: Connection opened with ID: ${
                    connectionInfo.connectionId
                    }, but request was canceled, disconnecting`,
            );

            // some bluetooth dongles/dongle drivers really doesn't like to be closed instantly, adding a small delay
            setTimeout(() => {
                this.openRequested = false;
                this.openCanceled = false;
                this.disconnect(function resetUI() {
                    if (callback) callback(false);
                });
            }, 150);
        } else if (this.openCanceled) {
            // connection didn't open and sequence was canceled, so we will do nothing
            console.log(
                "SERIAL: Connection didn't open and request was canceled",
            );
            this.openRequested = false;
            this.openCanceled = false;
            if (callback) callback(false);
        } else {
            this.openRequested = false;
            console.log("SERIAL: Failed to open serial port");
            if (callback) callback(false);
        }
    },
    async disconnect(callback) {
        this.connected = false;

        if (this.port) {
            this.transmitting = false;

            // remove listeners
            this.onReceive.listeners = [];

            if (this.writer) {
                await this.writer.close();
                this.writer = null;
            }
            this.port
                .close()
                .then(() => {
                    console.log(
                        `${this.logHead
                            }Connection with ID: ${
                            this.connectionId
                            } closed, Sent: ${
                            this.bytesSent
                            } bytes, Received: ${
                            this.bytesReceived
                            } bytes`,
                    );

                    this.connectionId = false;
                    this.bitrate = 0;
                    if (callback) callback({});
                })
                .catch((error) => {
                    console.error(error);
                    console.error(
                        `${this.logHead
                            }Failed to close connection with ID: ${
                            this.connectionId
                            } closed, Sent: ${
                            this.bytesSent
                            } bytes, Received: ${
                            this.bytesReceived
                            } bytes`,
                    );
                });
        } else {
            // connection wasn't opened, so we won't try to close anything
            // instead we will rise canceled flag which will prevent connect from continueing further after being canceled
            this.openCanceled = true;
        }
    },
    getInfo(callback) {
        this.port?.getInfo().then((info) => {
            callback(info);
        });
    },
    /**
     *
     * @param {ArrayBuffer} data MSP(V1|V2) payload
     */
    async send(data) {
        // TODO: there was a message buffer, check if it's really needed
        if (!this.connected) {
            console.error("attempting to send when disconnected");
            throw new Error("undefined");
        }

        await this.writer.write(data);

        // track sent bytes for statistics
        this.bytesSent += data.byteLength;

        return {
            bytesSent: data.byteLength,
        };
    },
    onReceive: {
        listeners: [],

        addListener(function_reference) {
            this.listeners.push(function_reference);
        },
        removeListener(function_reference) {
            this.listeners = this.listeners.filter(
                (l) => l !== function_reference,
            );
        },
    },
};
