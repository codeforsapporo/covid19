<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('帰国者・接触者電話相談センター相談件数(札幌市保健所値)')"
      :chart-data="querentsGraph"
      :date="convertToDateFromData(querents.last_update)"
      :source-from="$t('DATA-SMART CITY SAPPORO')"
      source-link="https://ckan.pf-sapporo.jp/dataset/covid_19_soudan"
      :loaded="querents.loaded"
      title-id="querents"
      :unit="$t('件')"
    />
  </v-col>
</template>

<script>
import formatGraph from '@/utils/formatGraph'
import convertToDateFromData from '@/utils/convertToDateFromData'
const TimeBarChart = () => import('@/components/TimeBarChart.vue')

export default {
  name: 'QuerentsCard',
  components: {
    TimeBarChart
  },
  data() {
    return {
      querents: {
        loaded: false,
        last_update: ''
      },
      querentsGraph: [],
      convertToDateFromData
    }
  },
  created() {
    this.getQuerentsGraphFromAPI()
  },
  methods: {
    async getQuerentsGraphFromAPI() {
      await this.$axios
        .$get('/querents.json')
        .then(response => {
          this.querentsGraph = formatGraph(response.data)
          this.querents.last_update = response.last_update
          this.querents.loaded = true
        })
        .catch(_ => {
          this.$emit('failed', '帰国者・接触者電話相談センター相談件数データ ')
        })
    }
  }
}
</script>
