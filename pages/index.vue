<template>
  <div class="MainPage">
    <page-header
      :icon="headerItem.icon"
      :title="headerItem.title"
      :date="convertToDateFromData(headerItem.date)"
    />
    <whats-new
      class="mb-4"
      url="http://www.pref.hokkaido.lg.jp/ss/tkk/singatakoronahaien.htm"
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
import PageHeader from '@/components/PageHeader.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import convertToDateFromData from '@/utils/convertToDateFromData.ts'
import DischargesCard from '@/components/cards/DischargesCard.vue'
import PatientsSummaryCard from '@/components/cards/PatientsSummaryCard.vue'
import PatientsCard from '@/components/cards/PatientsCard.vue'
import ContactsCard from '@/components/cards/ContactsCard.vue'
import QuerentsCard from '@/components/cards/QuerentsCard.vue'
import CurrentPatientsCard from '@/components/cards/CurrentPatientsCard.vue'
import InspectionsCard from '@/components/cards/InspectionsCard.vue'

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
        })
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
