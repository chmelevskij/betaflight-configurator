const NO_BATTERY_VOLTAGE_MAXIMUM = 1.8; // Maybe is better to add a call to MSP_BATTERY_STATE but is not available for all versions

/**
 * @type import('vue').Component
 */
const BatteryLegend = {
    props: {
        voltage: { type: Number, default: 0 },
        vbatmaxcellvoltage: {type: Number, default: 1},
    },
    // a bit of a hack here to get around the current translations.
    // vue i18n provides slightly different api for this. But
    // it's also possible to provide custom formatter
    filters: {
        stripEnd(value) {
            return value.replace(/\$1%/, "");
        },
    },
    computed: {
        reading() {
            let nbCells =
                Math.floor(this.voltage / this.vbatmaxcellvoltage) + 1;

            if (this.voltage === 0) {
                nbCells = 1;
            }

            const cellsText =
                this.voltage > NO_BATTERY_VOLTAGE_MAXIMUM
                    ? `${nbCells}S`
                    : "USB";
            return `${this.voltage.toFixed(2)}V (${cellsText})`;
        },
    },
    template: `
        <div class="battery-legend">{{ reading }}</div>
    `,
};

export default BatteryLegend;
