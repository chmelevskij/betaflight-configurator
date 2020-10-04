<style>
.battery-icon {
    background-image: url(../images/icons/cf_icon_bat_grey.svg);
    background-size: contain;
    background-position: center;
    display: inline-block;
    height: 30px;
    width: 60px;
    transition: none;
    margin-top: 4px;
    margin-left: -4px;
    background-repeat: no-repeat;
}
.quad-status-contents  {
    display: inline-block;
    margin-top: 10px;
    margin-left: 14px;
    height: 10px;
    width: 31px;
}
.quad-status-contents progress::-webkit-progress-bar {
    height: 12px;
    background-color: #eee;
}

.quad-status-contents progress::-webkit-progress-value {
    background-color: #bcf;
}
.battery-status {
    height: 11px;
}

.battery-status.state-ok {
    background-color: #59AA29;
}
.battery-status.state-warning {
    background-color: var(--error);
}

.battery-status.state-empty {
    animation: error-blinker 1s linear infinite;
}

@keyframes error-blinker {
    0% {
        background-color: transparent;
    }
    50% {
        background-color: var(--error);
    }
}
</style>

<template>
  <div class="battery-icon">
    <div class="quad-status-contents">
      <div
        class="battery-status"
        :class="reading.status"
        :style="reading.fill"
      ></div>
    </div>
  </div>
</template>

<script>
const NO_BATTERY_VOLTAGE_MAXIMUM = 1.8; // Maybe is better to add a call to MSP_BATTERY_STATE but is not available for all versions

export default {
  props: {
    voltage: {
      type: Number,
      default: 0,
    },
    vbatmaxcellvoltage: {
      type: Number,
      default: 1,
    },
    vbatmincellvoltage: {
      type: Number,
      default: 1,
    },
    vbatwarningcellvoltage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    reading() {
      var nbCells = Math.floor(this.voltage / this.vbatmaxcellvoltage) + 1;

      if (this.voltage == 0) {
        nbCells = 1;
      }

      var min = this.vbatmincellvoltage * nbCells;
      var max = this.vbatmaxcellvoltage * nbCells;
      var warn = this.vbatwarningcellvoltage * nbCells;

      const NO_BATTERY_VOLTAGE_MAXIMUM = 1.8; // Maybe is better to add a call to MSP_BATTERY_STATE but is not available for all versions

      if (this.voltage < min && this.voltage > NO_BATTERY_VOLTAGE_MAXIMUM) {
        return {
          status: ["state-empty"],
          fill: {
            width: "100%",
          },
        };
      } else {
        let fill = {
          width: ((this.voltage - min) / (max - min)) * 100 + "%",
        };

        if (this.voltage < warn) {
          return {
            status: ["state-warning"],
            fill,
          };
        } else {
          return {
            status: ["state-ok"],
            fill,
          };
        }
      }
    },
  },
};
</script>
