<template>
  <v-col class="DataCard" cols="12" md="6">
    <time-bar-chart
      :chart-data="dischargesGraph"
      :date="convertToDateFromData(discharges_summary.last_update)"
      :default-data-kind="'cumulative'"
      :loaded="discharges_summary.loaded"
      :source-from="$t('北海道 オープンデータポータル')"
      :supplement="
        $t('治療終了者数とは道発表の「陰性確認済累計」と同じものです。')
      "
      :title="$t('治療終了者数')"
      title-id="discharges-summary"
      :unit="$t('人')"
      source-link="https://www.harp.lg.jp/opendata/dataset/1369.html"
    />
  </v-col>
</template>

<script>
import formatDischargesSummaryGraph from '@/utils/formatDischargesSummaryGraph'
import convertToDateFromData from '@/utils/convertToDateFromData'
const TimeBarChart = () => import('@/components/TimeBarChart.vue')

export default {
  name: 'DischargesCard',
  components: {
    TimeBarChart
  },
  data() {
    return {
      discharges_summary: {
        loaded: false,
        last_update: ''
      },
      dischargesGraph: [],
      convertToDateFromData
    }
  },
  created() {
    this.getDischargesSummaryGraphFromAPI()
  },
  methods: {
    // 治療終了者数グラフ
    async getDischargesSummaryGraphFromAPI() {
      try {
        const fetchurl = await fetch(
          'https://codeforsapporo.github.io/covid19hokkaido_scraping/discharges_summary.json'
        )

        const response = await fetchurl.json()
        this.dischargesGraph = formatDischargesSummaryGraph(response.data)
        this.discharges_summary.last_update = response.last_update
        this.discharges_summary.loaded = true
      } catch (_) {
        this.$emit('failed', '治療終了者数データ ')
      }
    }
  }
}
</script>
