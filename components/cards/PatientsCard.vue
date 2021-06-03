<template>
  <v-col class="DataCard" cols="12" md="6">
    <data-table
      :chart-data="patientsTable"
      :chart-option="{}"
      :date="convertToDateFromData(patients.last_update)"
      :info="sumInfoOfPatients"
      :loaded="patients.loaded"
      :sort-by="'公表日'"
      :sort-desc="true"
      :source-from="$t('北海道 オープンデータポータル')"
      :title="$t('陽性患者の属性')"
      title-id="patients"
      source-link="https://www.harp.lg.jp/opendata/dataset/1369.html"
    />
  </v-col>
</template>

<script>
import formatTable from '@/utils/formatTable'
import convertToDateFromData from '@/utils/convertToDateFromData'
import formatPatientsSummaryGraph from '@/utils/formatPatientsSummaryGraph'
const DataTable = () => import('@/components/DataTable.vue')

export default {
  name: 'PatientsCard',
  components: {
    DataTable
  },
  data() {
    return {
      patients: {
        loaded: false,
        last_update: ''
      },
      sumInfoOfPatients: {
        lText: '',
        sText: '',
        unit: ''
      },
      patientsTable: {},
      convertToDateFromData
    }
  },
  created() {
    this.getPatientsTableFromAPI()
    this.getPatientsSummaryGraphFromAPI()
  },
  methods: {
    async getPatientsTableFromAPI() {
      await this.$axios
        .$get('/patients.json')
        .then(response => {
          this.patientsTable = formatTable(response.data)
          // 陽性患者の属性 ヘッダー翻訳
          for (const header of this.patientsTable.headers) {
            header.text =
              header.value === '退院' ? this.$t('退院※') : this.$t(header.value)
          }
          // 陽性患者の属性 中身の翻訳
          for (const row of this.patientsTable.datasets) {
            row['居住地'] = this.$t(row['居住地'])
            row['性別'] = this.$t(row['性別'])
            row['退院'] = this.$t(row['退院'])
            if (row['性別'] === '非公表性') {
              row['性別'] = this.$t('非公表')
            }
            const match = row['年代'].match(/^([0-9]+)代$/)
            if (match) {
              row['年代'] = this.$t('{age}代', { age: match[1] })
            } else {
              row['年代'] = this.$t(row['年代'])
            }
          }
          this.patients.last_update = response.last_update
          this.patients.loaded = true
        })
        .catch(_ => {
          this.$emit('failed', '陽性患者の属性データ ')
        })
    },
    async getPatientsSummaryGraphFromAPI() {
      await this.$axios
        .$get('/patients_summary.json')
        .then(response => {
          const patientsGraph = formatPatientsSummaryGraph(response.data)
          this.sumInfoOfPatients = {
            lText: patientsGraph[
              patientsGraph.length - 1
            ].cumulative.toLocaleString(),
            sText: this.$t('{date}の累計', {
              date: this.$dayjs(
                patientsGraph[patientsGraph.length - 1].label
              ).format('MM/DD')
            }),
            unit: this.$t('人')
          }
        })
        .catch(_ => {
          this.$emit('failed2', '陽性患者数データ ')
        })
    }
  }
}
</script>
