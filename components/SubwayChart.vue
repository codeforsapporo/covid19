<template>
  <data-view
    :title="title"
    :date="date"
    :loaded="loaded"
    :source-from="sourceFrom"
    :source-link="sourceLink"
    :title-id="titleId"
  >
    <v-overlay absolute :value="!loaded" justify-center align-center>
      <scale-loader color="#1268d8" />
    </v-overlay>
    <v-layout column :class="{ loading: !loaded }">
      <v-row align="left">
        <v-col class="d-flex" cols="3" sm="6">
          <v-select :items="lines" label="路線名" outlined />
        </v-col>
      </v-row>
      <apexcharts type="heatmap" :options="options" :series="chartData" />
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

export default {
  components: {
    DataView,
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
    labelData: {
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
      lines: ['東西線', '南北線', '東豊線'],
      options: {
        plotOptions: {
          heatmap: {
            colorScale: {
              ranges: [
                {
                  from: 0,
                  to: 0,
                  color: '#b2fcff',
                  name: 'low'
                },
                {
                  from: 1,
                  to: 1,
                  color: '#128FD9',
                  name: 'medium'
                },
                {
                  from: 21,
                  to: 45,
                  color: '#FFB200',
                  name: 'high'
                }
              ]
            }
          }
        }
      }
    }
  }
}
</script>
