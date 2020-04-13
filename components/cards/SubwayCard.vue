<template>
  <v-col cols="12" md="6" class="DataCard">
    <subway-chart
      :chart-data="chartData"
      :title="$t('地下鉄乗車率')"
      title-id="subway"
      :loaded="subway.loaded"
      :date="subway.last_update"
      :source-from="$t('札幌市交通局')"
      source-link="http://www.city.sapporo.jp/st/konzatsu_jokyo2020.html"
    />
  </v-col>
</template>

<script>
import formatHeatMapLabels from '@/utils/formatHeatMapLabels'
import formatHeatMap from '@/utils/formatHeatMap'
import SubwayChart from '@/components/SubwayChart.vue'
export default {
  name: 'SubwayCard',
  components: { SubwayChart },
  data() {
    return {
      chartData: [],
      subway: {
        loaded: false,
        last_update: ''
      },
      keys: []
    }
  },
  created() {
    this.getHeatMapFromAPI()
  },
  methods: {
    async getHeatMapFromAPI() {
      await this.$axios
        .$get(
          'https://raw.githubusercontent.com/Kanahiro/sapporo_subway_analyze/gh-pages/json/data.json'
        )
        .then(response => {
          const firstKey = Object.keys(response)
          firstKey.forEach(e => {
            const secondkey = Object.keys(response[e])
            secondkey.forEach(f => {
              const thirdKey = Object.keys(response[e][f])
              thirdKey.forEach(g => {
                this.chartData.push({
                  labels: formatHeatMapLabels({
                    linename: e,
                    date: f,
                    direction: g
                  }),
                  datas: formatHeatMap(response[e][f][g])
                })
              })
            })
          })
          this.subway.last_update = response.last_update
          this.subway.loaded = true
          this.dates = this.dates.filter(function(x, i, self) {
            return self.indexOf(x) === i
          })
        })
        .catch(_ => {
          this.$emit('failed', '帰国者・接触者電話相談センター相談件数データ ')
        })
    }
  }
}
</script>
