<template>
  <v-col cols="12" md="6" class="DataCard">
    <subway-chart
      :chart-data="datas"
      :title="$t('testCard')"
      :loaded="true"
      date="2020/04/06"
    />
  </v-col>
</template>

<script>
import formatHeatMap from '@/utils/formatHeatMap'
import SubwayChart from '@/components/SubwayChart.vue'
export default {
  name: 'SubwayCard',
  components: { SubwayChart },
  data() {
    return {
      datas: [],
      labels: [],
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
                this.datas.push(formatHeatMap(response[e][f][g]))
                this.labels.push()
              })
            })
          })
          this.test = formatHeatMap(response.namboku['3gatsu3shu'].right)
        })
        .catch(_ => {
          this.$emit('failed', '帰国者・接触者電話相談センター相談件数データ ')
        })
    }
  }
}
</script>
