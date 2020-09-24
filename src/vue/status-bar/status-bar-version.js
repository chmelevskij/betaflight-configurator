const StatusBarVersion = {
    props: [
        "configuratorVersion",
        "firmwareVersion",
        "firmwareId",
        "hardwareId",
        "gitChangesetId",
    ],
    template: `
        <div class="version">
            {{ $t("versionLabelConfigurator.message") }}: {{ configuratorVersion }}
            <span v-if="firmwareVersion && firmwareId">
                , {{ $t("versionLabelFirmware.message") }}: {{ firmwareVersion }} {{ firmwareId }}
            </span>
            <span v-if="hardwareId">
                , {{ $t("versionLabelTarget.message") }}: {{ hardwareId }}
            </span>
            ({{ gitChangesetId }})
        </div>
    `,
};

export default StatusBarVersion;
