<template>
  <v-col cols="12" md="6" class="DataCard">
    <subway-chart
      :chart-data="test"
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
      test: [],
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
          console.log(response.namboku['3gatsu3shu'].left)
          this.test = formatHeatMap(response.namboku['3gatsu3shu'].left)
        })
        .catch(_ => {
          this.$emit('failed', '帰国者・接触者電話相談センター相談件数データ ')
        })
    }
  }
}
</script>
