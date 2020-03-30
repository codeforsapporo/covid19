<template>
  <data-view
    :title="title"
    :date="date"
    :loaded="loaded"
    :source-from="sourceFrom"
    :source-link="sourceLink"
  >
    <template v-if="showButton === true" v-slot:button>
      <data-selector v-model="dataKind" />
    </template>
      <v-menu
        :close-on-content-click="false"
        v-model="menu1"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            label="Date Range"
            readonly
            v-model="daterangeText"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          :landscape="$vuetify.breakpoint.smAndUp"
          :max="minandmaxdates[1]"
          :min="minandmaxdates[0]"
          @change="menu1 = false"
          color="#1268d8"
          range
          v-model="selectordates"
          width="350px"
        ></v-date-picker>
      </v-menu>
    <v-overlay absolute :value="!loaded" justify-center align-center>
      <scale-loader color="#1268d8"/>
    </v-overlay>
    <v-layout column :class="{loading: !loaded}" >
      <bar :chart-data="displayData" :options="displayOption" :height="240" />
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
import moment from "../.nuxt/moment";

export default {
  components: { DataView, DataSelector, DataViewBasicInfoPanel, ScaleLoader },
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
    defaultDateKind: {
      type: String,
      required: false,
      default: 'all'
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
    }
  },
  data() {
    return {
      dataKind: this.defaultDataKind,
      dates : ['2020-03-05', '2020-03-20'],
      selectordates: ['2020-03-05', '2020-03-20'],
      minandmaxdates: ['2020-03-05', '2020-03-20'],
      menu1: false
    }
  },
  watch: {
    displayData() {
      const date0 = this.$moment(this.chartData[0].label).toISOString().substr(0,10)
      const date1 = this.$moment(this.chartData[this.chartData.length - 1].label).toISOString().substr(0,10)
      this.selectordates = [date0, date1]
      this.minandmaxdates = [date0, date1]
    },
    selectordates() {
      const date0 = this.$moment(this.selectordates[0])
      const date1 = this.$moment(this.selectordates[1])
      this.dates = [date0,date1]
    }
  },
  computed: {
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
    daterangeText() {
      const date0 = this.$moment(this.dates[0]).format('MM/DD')
      const date1 = this.$moment(this.dates[1]).format('MM/DD')
      return date0 + ' ~ ' + date1
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
          sText: this.$t(
            '実績値（前日比：{change} {unit}）',
            {change: this.displayTransitionRatio, unit: this.unit}
          ),
          unit: this.unit
        }
      }
      return {
        lText: this.chartData[
          this.chartData.length - 1
        ].cumulative.toLocaleString(),
        sText: this.$t(
          '{date} 累計値（前日比：{change} {unit}）',
          {
            date: this.chartData.slice(-1)[0].label,
            change: this.displayCumulativeRatio,
            unit: this.unit
          }
        ),
        unit: this.unit
      }
    },
    displayData() {
      console.log('displayData')
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
      return {
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
              offset:true,
              time: {
                displayFormats: {
                  day: 'M/D'
                },
                round: 'day',
                max: this.dates[1],
                min: this.dates[0]
              },
              stacked: true,
              gridLines: {
                display: false
              },
              ticks: {
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
