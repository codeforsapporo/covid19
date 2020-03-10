<template>
  <div class="MainPage">
    <page-header
      :icon="headerItem.icon"
      :title="headerItem.title"
      :date="fromdatatodate(headerItem.date)"
    />
    <whats-new
      class="mb-4"
      date="2020年3月8日"
      url="http://www.pref.hokkaido.lg.jp/ss/tkk/singatakoronahaien.htm"
      text="pull request に対してプレビュー画面を表示するテスト"
    />
    <v-row class="DataBlock">
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          title="陽性患者数"
          :chart-data="patientsGraph"
          :date="fromdatatodate(Data.patients.date)"
          sourceFrom="北海道庁webサイト"
          sourceLink="http://www.pref.hokkaido.lg.jp/ss/tkk/singatakoronahaien.htm"
          :unit="'人'"
          :defaultDataKind="'cumulative'"
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <data-table
          :title="'陽性患者の属性'"
          :chart-data="patientsTable"
          :chart-option="{}"
          :date="fromdatatodate(Data.patients.date)"
          sourceFrom="北海道庁webサイト"
          sourceLink="http://www.pref.hokkaido.lg.jp/hf/kth/kak/hasseijoukyou.htm"
          :info="sumInfoOfPatients"
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          title="新型コロナコールセンター相談件数(札幌市保健所値)"
          :chart-data="contactsGraph"
          :date="fromdatatodate(Data.contacts.date)"
          sourceFrom="札幌市役所webサイト"
          sourceLink="https://www.city.sapporo.jp/hokenjo/f1kansen/2019n-cov_kaigi.html"
          :unit="'件'"
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          title="帰国者・接触者電話相談センター相談件数(札幌市保健所値)"
          :chart-data="querentsGraph"
          :date="fromdatatodate(Data.querents.date)"
          sourceFrom="札幌市役所webサイト"
          sourceLink="https://www.city.sapporo.jp/hokenjo/f1kansen/2019n-cov_kaigi.html"
          :unit="'件'"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import TimeBarChart from '@/components/TimeBarChart.vue'
import TimeStackedBarChart from '@/components/TimeStackedBarChart.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import Data from '@/data/data.json'
import DataTable from '@/components/DataTable.vue'
import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatTable'
import SvgCard from '@/components/SvgCard.vue'

export default {
  components: {
    PageHeader,
    TimeBarChart,
    TimeStackedBarChart,
    WhatsNew,
    StaticInfo,
    DataTable,
    SvgCard
  },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)
    // 感染者数
    const patientsTable = formatTable(Data.patients.data)
    // 相談件数
    const contactsGraph = formatGraph(Data.contacts.data)
    // 帰国者・接触者電話相談センター相談件数
    const querentsGraph = formatGraph(Data.querents.data)

    const sumInfoOfPatients = {
      lText: patientsGraph[
        patientsGraph.length - 1
      ].cumulative.toLocaleString(),
      sText: patientsGraph[patientsGraph.length - 1].label + 'の累計',
      unit: '人'
    }

    const data = {
      Data,
      patientsTable,
      patientsGraph,
      contactsGraph,
      querentsGraph,
      sumInfoOfPatients,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: '道内の最新感染動向',
        date: Data.last_update
      },
      option: {
        tooltips: {
          displayColors: false,
          callbacks: {
            label(tooltipItem) {
              const labelText = tooltipItem.value + '人'
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
    return data
  },
  head() {
    return {
      title: '道内の最新感染動向'
    }
  },
  methods: {
    fromdatatodate(data){
      const dateint = Date.parse(data)
      const date = new Date(dateint)
      const month = ("0"+(date.getMonth() + 1)).slice(-2)
      const day =  ("0"+date.getDate()).slice(-2)
      const hour =  ("0"+date.getHours()).slice(-2)
      const min =  ("0"+date.getMinutes()).slice(-2)
      const sec =  ("0"+date.getSeconds()).slice(-2)
      const datestr = date.getFullYear() + '/' + month + '/' + day + ' ' + hour + ':' + min + ':' + sec
      return datestr
    }
  }
}
</script>

<style lang="scss" scoped>
.MainPage {
  .DataBlock {
    margin: 20px -12px;
    .DataCard {
      margin-bottom: 20px;
    }
  }
}
</style>
