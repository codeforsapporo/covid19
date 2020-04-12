<template>
  <data-view
    :title="title"
    :loaded="loaded"
    :date="date"
    :source-from="sourceFrom"
    :source-link="sourceLink"
    :title-id="titleId"
  >
    <template v-slot:button>
      <span />
    </template>
    <v-overlay absolute :value="!loaded" justify-center align-center>
      <scale-loader color="#1268d8" />
    </v-overlay>
    <v-layout :class="{ loading: !loaded }" column>
      <v-data-table
        :headers="chartData ? chartData.headers : []"
        :items="chartData ? chartData.datasets : []"
        :items-per-page="-1"
        :hide-default-footer="true"
        :height="300"
        :sort-by="sortBy"
        :sort-desc="sortDesc"
        :fixed-header="true"
        :mobile-breakpoint="0"
        class="cardTable"
      />
    </v-layout>
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="info ? info.lText : ''"
        :s-text="info ? info.sText : ''"
        :unit="info ? info.unit : ''"
      />
    </template>
  </data-view>
</template>

<style lang="scss">
.cardTable {
  &.v-data-table {
    th {
      padding: 8px 10px;
      height: auto;
      border-bottom: 1px solid $gray-4;
      white-space: nowrap;
      color: $gray-2;
      font-size: 12px;
    }
    tbody {
      tr {
        color: $gray-1;
        td {
          padding: 8px 10px;
          height: auto;
          font-size: 12px;
        }
        &:nth-child(odd) {
          td {
            background: rgba($gray-4, 0.3);
          }
        }
        &:not(:last-child) {
          td:not(.v-data-table__mobile-row) {
            border: none;
          }
        }
      }
    }
  }
}

.loading {
  visibility: hidden;
}
</style>

<script>
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import DataView from '@/components/DataView.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'

export default {
  components: { DataView, DataViewBasicInfoPanel, ScaleLoader },
  props: {
    title: {
      type: String,
      default: ''
    },
    chartData: {
      type: Object,
      default: () => {}
    },
    date: {
      type: String,
      default: ''
    },
    info: {
      type: Object,
      required: false,
      default: () => {}
    },
    sourceFrom: {
      type: String,
      required: false,
      default: ''
    },
    sourceLink: {
      type: String,
      required: false,
      default: ''
    },
    loaded: {
      type: Boolean,
      required: true,
      default: false
    },
    sortBy: {
      type: String,
      required: false,
      default: ''
    },
    sortDesc: {
      type: Boolean,
      required: false,
      default: false
    },
    titleId: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
