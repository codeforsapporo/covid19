<template>
  <data-view
    :title="title"
    :date="date"
    :loaded="loaded"
    :source-from="sourceFrom"
    :source-link="sourceLink"
    :title-id="titleId"
  >
    <template v-if="showButton === true" v-slot:button>
      <data-selector v-model="dataKind" />
    </template>
    <v-overlay absolute :value="!loaded" justify-center align-center>
      <scale-loader color="#1268d8" />
    </v-overlay>
    <v-layout column :class="{ loading: !loaded }">
      <client-only>
        <apexcharts
          type="bar"
          :options="displayOption1"
          :series="displayData"
        />
        <apexcharts
          type="area"
          :options="displayOption2"
          :series="displayData"
        />
      </client-only>
      <!--
      <bar :chart-data="displayData" :options="displayOption" :height="240" />
      <date-select-slider
        :chart-data="chartData"
        :value="[0, sliderMax]"
        :slider-max="sliderMax"
        @sliderInput="sliderUpdate"
      />-->
      <v-footer v-if="supplement !== ''" class="TimeBarChart-Footer">
        <ul class="supplementTexts">
          <li class="supplementText">
            {{ $t('補足:') }}
          </li>
          <li class="supplementText2">
            {{ supplement }}
          </li>
        </ul>
      </v-footer>
    </v-layout>
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="displayInfo.lText"
        :s-text="displayInfo.sText"
        :unit="displayInfo.unit"
      />
    </template>
  </data-view>
</template>

<style lang="scss">
.TimeBarChart-Footer {
  background-color: $white !important;
  text-align: left;
  margin: 0;
  flex-direction: row-reverse;
  @include font-size(12);

  color: $gray-3 !important;
  text-decoration: none;
}
.supplementTexts {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  list-style-type: none;
}
.supplementText {
  width: 3em;
}
.supplementText2 {
  width: 100%;
}
.loading {
  visibility: hidden;
}
</style>

<script>
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import DataView from '@/components/DataView.vue'
import DataSelector from '@/components/DataSelector.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'

export default {
  components: {
    DataView,
    DataSelector,
    DataViewBasicInfoPanel,
    ScaleLoader
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    chartData: {
      type: Array,
      required: false,
      default: () => []
    },
    date: {
      type: String,
      required: true,
      default: ''
    },
    unit: {
      type: String,
      required: false,
      default: ''
    },
    sourceFrom: {
      type: String,
      required: false,
      default: ''
    },
    sourceLink: {
      type: String,
      required: false,
      default: ''
    },
    defaultDataKind: {
      type: String,
      required: false,
      default: 'transition'
    },
    supplement: {
      type: String,
      required: false,
      default: ''
    },
    showButton: {
      type: Boolean,
      required: false,
      default: true
    },
    loaded: {
      type: Boolean,
      required: true,
      default: false
    },
    titleId: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      dataKind: this.defaultDataKind
    }
  },
  computed: {
    displayInfo() {
      if (!this.chartData || this.chartData.length === 0) {
        return {
          lText: '',
          sText: '',
          unit: ''
        }
      }
      if (this.dataKind === 'transition') {
        return {
          lText: `${this.chartData.slice(-1)[0].transition.toLocaleString()}`,
          sText: this.$t('実績値（前日比：{change} {unit}）', {
            change: this.displayTransitionRatio,
            unit: this.unit
          }),
          unit: this.unit
        }
      }
      return {
        lText: this.chartData[
          this.chartData.length - 1
        ].cumulative.toLocaleString(),
        sText: this.$t('{date} 累計値（前日比：{change} {unit}）', {
          date: this.$dayjs(this.chartData.slice(-1)[0].label).format('MM/DD'),
          change: this.displayCumulativeRatio,
          unit: this.unit
        }),
        unit: this.unit
      }
    },
    displayData() {
      if (!this.chartData || this.chartData.length === 0) {
        return []
      }
      if (this.dataKind === 'transition') {
        return [
          {
            label: this.dataKind,
            data: this.chartData.map(d => {
              return d.transition
            })
          }
        ]
      }
      return [
        {
          label: this.dataKind,
          data: this.chartData.map(d => {
            return d.cumulative
          })
        }
      ]
    },
    displayOption1() {
      if (!this.chartData || this.chartData.length === 0) {
        return {
          chart: {
            id: this.titleId + 'chart1',
            height: 240
          },
          dataLabels: {
            enabled: false
          }
        }
      }
      return {
        chart: {
          id: this.titleId + 'chart1',
          height: 240
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: this.chartData.map(d => {
            return this.$dayjs(d.label).format('MM/DD')
          })
        }
      }
    },
    displayOption2() {
      if (!this.chartData || this.chartData.length === 0) {
        return {
          chart: {
            id: this.titleId + 'chart2',
            height: 120,
            brush: {
              enabled: true,
              target: this.titleId + 'chart1',
              autoScaleYaxis: false
            },
            selection: {
              enabled: true
            }
          },
          dataLabels: {
            enabled: false
          },
          fill: {
            opacity: 1
          }
        }
      }
      return {
        chart: {
          id: this.titleId + 'chart2',
          height: 120,
          brush: {
            enabled: true,
            target: this.titleId + 'chart1',
            autoScaleYaxis: false
          },
          selection: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: this.chartData.map(d => {
            return this.$dayjs(d.label).format('MM/DD')
          })
        }
      }
    }
  },
  methods: {
    sliderUpdate(sliderValue) {
      this.graphRange = sliderValue
    },
    formatDayBeforeRatio(dayBeforeRatio) {
      switch (Math.sign(dayBeforeRatio)) {
        case 1:
          return `+${dayBeforeRatio}`
        case -1:
          return `${dayBeforeRatio}`
        default:
          return `${dayBeforeRatio}`
      }
    }
  }
}
</script>
