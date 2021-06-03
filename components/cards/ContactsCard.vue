<template>
  <v-col class="DataCard" cols="12" md="6">
    <time-bar-chart
      :chart-data="contactsGraph"
      :date="convertToDateFromData(contacts.last_update)"
      :loaded="contacts.loaded"
      :source-from="$t('DATA-SMART CITY SAPPORO')"
      :title="$t('新型コロナコールセンター相談件数(札幌市保健所値)')"
      :unit="$t('件')"
      title-id="contacts"
      source-link="https://ckan.pf-sapporo.jp/dataset/covid_19_soudan"
    />
  </v-col>
</template>

<script>
import formatGraph from '@/utils/formatGraph.ts'
import convertToDateFromData from '@/utils/convertToDateFromData'
const TimeBarChart = () => import('@/components/TimeBarChart.vue')

export default {
  name: 'ContactsCard',
  components: {
    TimeBarChart
  },
  data() {
    return {
      contacts: {
        loaded: false,
        last_update: ''
      },
      contactsGraph: [],
      convertToDateFromData
    }
  },
  created() {
    this.getContactsGraphFromAPI()
  },
  methods: {
    async getContactsGraphFromAPI() {
      await this.$axios
        .$get('/contacts.json')
        .then(response => {
          this.contactsGraph = formatGraph(response.data)
          this.contacts.last_update = response.last_update
          this.contacts.loaded = true
        })
        .catch(_ => {
          this.$emit('failed', '新型コロナコールセンター相談件数データ ')
        })
    }
  }
}
</script>
