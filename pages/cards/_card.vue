<template>
  <div
    v-show="
      this.$route.query.embed === 'true' || this.$route.query.ogp === 'true'
    "
  >
    <current-patients-card
      v-if="this.$route.params.card === 'current-patients'"
    />
    <contacts-card v-else-if="this.$route.params.card === 'contacts'" />
    <discharges-card
      v-else-if="this.$route.params.card === 'discharges-summary'"
    />
    <inspections-card v-else-if="this.$route.params.card === 'inspections'" />
    <patients-card v-else-if="this.$route.params.card === 'patients'" />
    <patients-summary-card
      v-else-if="this.$route.params.card === 'patients-summary'"
    />
    <querents-card v-else-if="this.$route.params.card === 'querents'" />
    <subway-card v-else-if="this.$route.params.card === 'subway'" />
  </div>
</template>

<script>
import SubwayCard from '../../components/cards/SubwayCard'
import CurrentPatientsCard from '@/components/cards/CurrentPatientsCard.vue'
import ContactsCard from '@/components/cards/ContactsCard.vue'
import DischargesCard from '@/components/cards/DischargesCard.vue'
import InspectionsCard from '@/components/cards/InspectionsCard.vue'
import PatientsCard from '@/components/cards/PatientsCard.vue'
import PatientsSummaryCard from '@/components/cards/PatientsSummaryCard.vue'
import QuerentsCard from '@/components/cards/QuerentsCard.vue'

export default {
  components: {
    SubwayCard,
    QuerentsCard,
    PatientsSummaryCard,
    PatientsCard,
    InspectionsCard,
    DischargesCard,
    ContactsCard,
    CurrentPatientsCard
  },
  data() {
    const data = {
      title: ''
    }
    return data
  },
  created() {
    switch (this.$route.params.card) {
      case 'contacts':
        this.title = this.$t('新型コロナコールセンター相談件数(札幌市保健所値)')
        break
      case 'current-patients':
        this.title = this.$t('現在患者数')
        break
      case 'discharges-summary':
        this.title = this.$t('治療終了者数')
        break
      case 'inspections':
        this.title = this.$t('検査数')
        break
      case 'patients':
        this.title = this.$t('陽性患者の属性')
        break
      case 'patients-summary':
        this.title = this.$t('陽性患者数')
        break
      case 'querents':
        this.title = this.$t(
          '帰国者・接触者電話相談センター相談件数(札幌市保健所値)'
        )
        break
      case 'subway':
        this.title = this.$t('地下鉄混雑度')
        break
    }
  },
  mounted() {
    if (
      this.$route.query.embed !== 'true' &&
      this.$route.query.ogp !== 'true'
    ) {
      this.$router.push({
        path: this.localePath('/'),
        hash: this.$route.params.card
      })
    }
  },
  head() {
    const url = 'https://stopcovid19.hokkaido.dev/'
    const timestamp = new Date().getTime()
    const ogpImage =
      this.$i18n.locale === 'ja'
        ? `${url}/api/${this.$route.params.card}.png?t=${timestamp}`
        : `${url}/api/${this.$i18n.locale}/${this.$route.params.card}.png?t=${timestamp}`
    const description = `${this.$t(
      '当サイトは、道内の新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために作成されました。開発は、ICTエンジニアやデザイナーなどによって結成された「JUST道IT」が行っています。'
    )}`
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: url + this.$route.path + '/'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            this.title +
            ' | ' +
            this.$t('北海道') +
            ' ' +
            this.$t('新型コロナウイルス{mobileBreak}まとめサイト', {
              mobileBreak: ''
            })
        },
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogpImage
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: ogpImage
        }
      ]
    }
  }
}
</script>
