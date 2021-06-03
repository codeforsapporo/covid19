<template>
  <v-col class="DataCard" cols="12" md="6">
    <time-bar-chart
      :chart-data="inspectionsGraph"
      :date="convertToDateFromData(inspections.last_update)"
      :default-data-kind="'cumulative'"
      :loaded="inspections.loaded"
      :show-button="false"
      :source-from="$t('北海道 オープンデータポータル')"
      :supplement="
        $t(
          '3月3日以前のデータが公開されていないため、グラフは3月3日以降となります。'
        )
      "
      :title="$t('検査数')"
      :unit="$t('人')"
      title-id="inspections"
      source-link="https://www.harp.lg.jp/opendata/dataset/1369.html"
    />
  </v-col>
</template>

<script>
import formatInspectionsGraph from '@/utils/formatInspectionsGraph'
import convertToDateFromData from '@/utils/convertToDateFromData'
const TimeBarChart = () => import('@/components/TimeBarChart.vue')
export default {
  name: 'InspectionsCard',
  components: {
    TimeBarChart
  },
  data() {
    return {
      inspections: {
        loaded: false,
        last_update: ''
      },
      inspectionsGraph: [],
      convertToDateFromData
    }
  },
  created() {
    this.getInscpectionsGraphFromAPI()
  },
  methods: {
    async getInscpectionsGraphFromAPI() {
      await this.$axios
        .$get('/inspections.json')
        .then(response => {
          this.inspectionsGraph = formatInspectionsGraph(response.data)
          this.inspections.last_update = response.last_update
          this.inspections.loaded = true
          return true
        })
        .catch(_ => {
          this.$emit('failed', '検査数データ ')
        })
    }
  }
}
</script>
