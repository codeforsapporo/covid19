<template>
  <v-col cols="12" md="6" class="DataCard">
    <subway-chart :title="$t('testCard')" loaded="true" date="2020/04/06" />
  </v-col>
</template>

<script>
import SubwayChart from '@/components/SubwayChart.vue'
export default {
  name: 'SubwayCard',
  components: { SubwayChart },
  data() {
    return {
      options: {
        plotOptions: {
          heatmap: {
            colorScale: {
              ranges: [
                {
                  from: -30,
                  to: 5,
                  color: '#00A100',
                  name: 'low'
                },
                {
                  from: 6,
                  to: 20,
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
      },
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
      ]
    }
  }
}
</script>
