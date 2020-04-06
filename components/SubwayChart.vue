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
      <apexcharts type="heatmap" :options="options" :series="series" />
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
      options: {},
      series: [
        {
          name: 'Metric1',
          data: [1, 3, 4, 5, 6, 7, 4]
        },
        {
          name: 'Metric2',
          data: [1, 3, 4, 5, 6, 7, 4]
        },
        {
          name: 'Metric3',
          data: [1, 3, 4, 5, 6, 7, 4]
        },
        {
          name: 'Metric4',
          data: [1, 3, 4, 5, 6, 7, 4]
        },
        {
          name: 'Metric5',
          data: [1, 3, 4, 5, 6, 7, 4]
        },
        {
          name: 'Metric6',
          data: [1, 3, 4, 5, 6, 7, 4]
        },
        {
          name: 'Metric7',
          data: [1, 3, 4, 5, 6, 7, 4]
        },
        {
          name: 'Metric8',
          data: [1, 3, 4, 5, 6, 7, 4]
        },
        {
          name: 'Metric9',
          data: [1, 3, 4, 5, 6, 7, 4]
        }
      ],
      dataKind: this.defaultDataKind,
      graphRange: [0, 1]
    }
  },
  computed: {
    sliderMax() {
      if (!this.chartData || this.chartData.length === 0) {
        return 1
      }
      return this.chartData.length - 1
    },
    displayCumulativeRatio() {
      const lastDay = this.chartData.slice(-1)[0].cumulative
      const lastDayBefore = this.chartData.slice(-2)[0].cumulative
      return this.formatDayBeforeRatio(lastDay - lastDayBefore).toLocaleString()
    },
    displayTransitionRatio() {
      const lastDay = this.chartData.slice(-1)[0].transition
      const lastDayBefore = this.chartData.slice(-2)[0].transition
      return this.formatDayBeforeRatio(lastDay - lastDayBefore).toLocaleString()
    },
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
          date: this.$moment(this.chartData.slice(-1)[0].label).format('MM/DD'),
          change: this.displayCumulativeRatio,
          unit: this.unit
        }),
        unit: this.unit
      }
    },
    displayData() {
      if (!this.chartData || this.chartData.length === 0) {
        return {}
      }
      if (this.dataKind === 'transition') {
        return {
          labels: this.chartData.map(d => {
            return d.label
          }),
          datasets: [
            {
              label: this.dataKind,
              data: this.chartData.map(d => {
                return d.transition
              }),
              backgroundColor: '#1c8df0',
              borderWidth: 0
            }
          ]
        }
      }
      return {
        labels: this.chartData.map(d => {
          return d.label
        }),
        datasets: [
          {
            label: this.dataKind,
            data: this.chartData.map(d => {
              return d.cumulative
            }),
            backgroundColor: '#1c8df0',
            borderWidth: 0
          }
        ]
      }
    },
    displayOption() {
      const unit = this.unit
      if (!this.chartData || this.chartData.length === 0) {
        return {}
      }
      return {
        animation: false,
        tooltips: {
          displayColors: false,
          callbacks: {
            label(tooltipItem) {
              const labelText = `${parseInt(
                tooltipItem.value
              ).toLocaleString()} ${unit}`
              return labelText
            }
          }
        },
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              type: 'time',
              offset: true,
              time: {
                tooltipFormat: 'MM/DD',
                unit: 'day',
                unitStepSize: 1,
                displayFormats: {
                  day: 'M/D'
                },
                round: 'day'
              },
              stacked: true,
              gridLines: {
                display: false
              },
              ticks: {
                max: this.chartData[this.graphRange[1]].label,
                min: this.chartData[this.graphRange[0]].label,
                fontSize: 10,
                maxTicksLimit: 20,
                fontColor: '#808080'
              }
            }
          ],
          yAxes: [
            {
              location: 'bottom',
              stacked: true,
              gridLines: {
                display: true,
                color: '#E5E5E5'
              },
              ticks: {
                suggestedMin: 0,
                maxTicksLimit: 8,
                fontColor: '#808080'
              }
            }
          ]
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
