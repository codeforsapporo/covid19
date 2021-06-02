<template>
  <v-col class="DataCard" cols="12" md="6">
    <time-bar-chart
      :chart-data="currentPatientsGraph"
      :date="convertToDateFromData(current_patients.last_update)"
      :default-data-kind="'cumulative'"
      :loaded="current_patients.loaded"
      :source-from="$t('北海道 オープンデータポータル')"
      :supplement="
        $t(
          '現在患者数とは、陽性患者数から治療終了者数と死亡者数を除いた人数です。なお、ご覧いただいている時間によっては累計されている日付が違う場合がありますのでご注意ください。死亡者数は北海道のホームページを参照してください。'
        )
      "
      :title="$t('現在患者数')"
      :unit="$t('人')"
      title-id="current-patients"
      source-link="https://www.harp.lg.jp/opendata/dataset/1369.html"
    />
  </v-col>
</template>

<script>
import formatCurrentPatientsGraph from '@/utils/formatCurrentPatientsGraph'
import convertToDateFromData from '@/utils/convertToDateFromData'
const TimeBarChart = () => import('@/components/TimeBarChart.vue')
export default {
  name: 'CurrentPatientsCard',
  components: {
    TimeBarChart
  },
  data() {
    return {
      current_patients: {
        loaded: false,
        last_update: ''
      },
      currentPatientsGraph: [],
      convertToDateFromData
    }
  },
  created() {
    this.getCurrentPatientsGraphFromAPI()
  },
  methods: {
    async getCurrentPatientsGraphFromAPI() {
      try {
        const fetchurl = await fetch(
          'https://codeforsapporo.github.io/covid19hokkaido_scraping/current_patients.json'
        )

        const response = await fetchurl.json()
        this.currentPatientsGraph = formatCurrentPatientsGraph(response.data)
        this.current_patients.last_update = response.last_update
        this.current_patients.loaded = true
      } catch (_) {
        this.$emit('failed', '現在患者数データ ')
      }
    }
  }
}
</script>
