<template>
  <div class="MainPage">
    <page-header
      :icon="headerItem.icon"
      :title="headerItem.title"
      :date="convertToDateFromData(headerItem.date)"
    />
    <whats-new
      class="mb-4"
      url="http://www.pref.hokkaido.lg.jp/ss/ssa/singatakoronahaien.htm"
      :text="$t('北海道発表の新型コロナウイルス感染症に関する情報はこちら')"
    />

    <v-row class="DataBlock">
      <current-patients-card id="current-patients" />
      <discharges-card id="discharges" />
      <patients-summary-card id="patients-summary" />
      <patients-card id="patients" />
      <inspections-card id="inspections" />
      <contacts-card id="contacts" />
      <querents-card id="querents" />
    </v-row>
    <v-dialog v-model="failed" flat>
      <v-alert type="error">
        データの取得に失敗しました。<br />
        後ほど再度お試しいただき、改善しない場合には「JUST 道
        IT」までご連絡ください。<br />
        取得に失敗したデータ： {{ failed_datas }}
      </v-alert>
    </v-dialog>
  </div>
</template>

<script>
import convertToDateFromData from '@/utils/convertToDateFromData.ts'
import DischargesCard from '@/components/cards/DischargesCard.vue'
import PatientsSummaryCard from '@/components/cards/PatientsSummaryCard.vue'
import PatientsCard from '@/components/cards/PatientsCard.vue'
import ContactsCard from '@/components/cards/ContactsCard.vue'
import QuerentsCard from '@/components/cards/QuerentsCard.vue'
import CurrentPatientsCard from '@/components/cards/CurrentPatientsCard.vue'
import InspectionsCard from '@/components/cards/InspectionsCard.vue'
const PageHeader = () => import('@/components/PageHeader.vue')
const WhatsNew = () => import('@/components/WhatsNew.vue')

export default {
  components: {
    InspectionsCard,
    CurrentPatientsCard,
    QuerentsCard,
    ContactsCard,
    PatientsCard,
    PatientsSummaryCard,
    DischargesCard,
    PageHeader,
    WhatsNew
  },
  data() {
    const data = {
      /**
       * 全体の最終更新日
       */
      last_update: '',
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('道内の最新感染動向'),
        date: ''
      },
      failed: false,
      failed_datas: '',
      convertToDateFromData
    }
    return data
  },
  created() {
    this.getLastUpdateFromAPI()
  },
  methods: {
    async getLastUpdateFromAPI() {
      await this.$axios
        .$get('/last_update.json')
        .then(response => {
          this.headerItem = {
            icon: 'mdi-chart-timeline-variant',
            title: this.$t('道内の最新感染動向'),
            date: response
          }
        })
        .catch(_ => {
          this.failed = true
          this.failed_datas += '最終更新日データ '
        })
    }
  },
  head() {
    return {
      title:
        this.$t('道内の最新感染動向') +
        ' | ' +
        this.$t('北海道') +
        ' ' +
        this.$t('新型コロナウイルス{mobileBreak}まとめサイト', {
          mobileBreak: ''
        }),
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: `{
              "@context": "https://schema.org",
              "@type": "SpecialAnnouncement",
              "name": "北海道内の新型コロナウイルス感染動向",
              "text": "北海道内における新型コロナウイルス感染症の現在患者数や陽性者数、陽性患者の属性、PCR検査数などをお知らせしています。",
              "url": "https://stopcovid19.hokkaido.dev/",
              "datePosted": "2020-05-05T00:00",
              "expires": "2021-03-31T23:59",
              "spatialCoverage": [{
                "@context":"https://schema.org/",
                "@type": "AdministrativeArea",
                "name": "北海道"
              }],
              "category": "https://www.wikidata.org/wiki/Q81068910",
              "diseaseSpreadStatistics" : [{
                "@type": "Dataset",
                "name" : "北海道 新型コロナウイルス感染症の陽性患者属性",
                "description" : "北海道が公式に発表している新型コロナウイルス感染症に関する陽性患者属性のデータ。Shift-JISでエンコードされています。",
                "sameAs": "https://www.harp.lg.jp/opendata/dataset/1369.html",
                "license": "https://creativecommons.org/licenses/by/2.1/jp/",
                "distribution" : {
                    "@type": "DataDownload",
                    "contentUrl": "https://www.harp.lg.jp/opendata/dataset/1369/resource/2828/patients.csv",
                    "encodingFormat" : "text/csv"
                }
              },{
                "@type": "Dataset",
                "name" : "北海道 新型コロナウイルス感染症の検査数、陽性患者数、現在患者数（軽症・中等症、重症）、死亡数、陰性確認済み数",
                "description" : "北海道が公式に発表している新型コロナウイルス感染症に関する検査数、陽性患者数、現在患者数（軽症・中等症、重症）、死亡数、陰性確認済み数のデータ。※軽症中等症、重症については、3月7日から発表のため、3月7日のデータはそれまでの累計、それ以降は日ごとの数である ※検査数については、3月3日から発表のため3月3日のデータはそれまでの累計、3月4日からは日ごとの数となっている",
                "sameAs": "https://www.harp.lg.jp/opendata/dataset/1369.html",
                "license": "https://creativecommons.org/licenses/by/2.1/jp/",
                "distribution" : {
                    "@type": "DataDownload",
                    "contentUrl": "https://www.harp.lg.jp/opendata/dataset/1369/resource/2853/covid19_data.csv",
                    "encodingFormat" : "text/csv"
                }
              },{
                "@type": "Dataset",
                "name" : "北海道 新型コロナウイルス感染症の日ごとの年代別累計、性別別累計",
                "description" : "北海道が公式に発表している新型コロナウイルス感染症に関する陽性患者属性から算出した、日ごとの年代別累計、性別別累計ですのデータ。※年齢の非公表をagenull、性別の非公表をsexnullとする",
                "sameAs": "https://www.harp.lg.jp/opendata/dataset/1369.html",
                "license": "https://creativecommons.org/licenses/by/2.1/jp/",
                "distribution" : {
                    "@type": "DataDownload",
                    "contentUrl": "https://www.harp.lg.jp/opendata/dataset/1369/resource/2888/patients_age_sex.csv",
                    "encodingFormat" : "text/csv"
                }
              }]
            }
          `,
          type: 'application/ld+json'
        }
      ]
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
