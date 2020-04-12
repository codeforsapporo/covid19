<template>
  <v-app class="app">
    <dev-environment-ribbon v-if="displayRibbon" />
    <v-overlay v-if="loading" color="#F8F9FA" opacity="1" z-index="9999">
      <div class="loader">
        <logo-animation height="50px" :alt="$t('北海道')" />
        <scale-loader color="#1268d8" />
      </div>
    </v-overlay>
    <div v-if="hasNavigation" class="appContainer">
      <div class="naviContainer">
        <SideNavigation
          :is-navi-open="isNaviOpen"
          :class="{ open: isNaviOpen }"
          @openNavi="showNavi"
          @closeNavi="hideNavi"
        />
      </div>
      <div class="mainContainer" :class="{ open: isNaviOpen }">
        <v-container class="px-4 py-8">
          <nuxt />
        </v-container>
      </div>
    </div>
    <div v-else class="embed">
      <v-container>
        <nuxt />
      </v-container>
    </div>
  </v-app>
</template>

<script>
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import SideNavigation from '@/components/SideNavigation'
import DevEnvironmentRibbon from '@/components/DevEnvironmentRibbon'
import LogoAnimation from '@/components/Logo-Animation'

export default {
  components: {
    LogoAnimation,
    ScaleLoader,
    SideNavigation,
    DevEnvironmentRibbon
  },
  data() {
    let hasNavigation = true
    let loading = true
    let getOGP = false
    if (this.$route.query.embed === 'true') {
      hasNavigation = false
      loading = false
    } else if (this.$route.query.ogp === 'true') {
      getOGP = true
      hasNavigation = false
      loading = false
    }
    return {
      hasNavigation,
      loading,
      getOGP,
      isNaviOpen: false
    }
  },
  computed: {
    displayRibbon() {
      if (this.getOGP) {
        return false
      }
      return process.env.NODE_ENV !== 'production'
    }
  },
  mounted() {
    this.loading = false
  },
  methods: {
    showNavi() {
      this.isNaviOpen = true
    },
    hideNavi() {
      this.isNaviOpen = false
    }
  },
  head() {
    const { htmlAttrs, meta } = this.$nuxtI18nSeo()
    const ogLocale =
      meta && meta.length > 0
        ? meta[0]
        : {
            hid: 'og:locale',
            name: 'og:locale',
            content: this.$i18n.locale
          }
    return {
      htmlAttrs,
      link: [
        {
          rel: 'canonical',
          href: `https://stopcovid19.hokkaido.dev${this.$route.path}`
        }
      ],
      meta: [
        {
          hid: 'author',
          name: 'author',
          content: this.$t('JUST道IT')
        },
        {
          hid: 'description',
          name: 'description',
          content:
            this.$t(
              '当サイトは、道内の新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために作成されました。開発は、ICTエンジニアやデザイナーなどによって結成された「JUST道IT」が行っています。'
            ) +
            '' +
            this.$t(
              '複製・改変が許されたオープンソースライセンスで公開されている、{tokyoCovid19Site}の{tokyoCovid19SiteGitHub}を利用しています。',
              {
                tokyoCovid19:
                  this.$t('東京都公式新型コロナウイルス対策サイト') +
                  ' ( https://stopcovid19.metro.tokyo.lg.jp/ )',
                tokyoCovid19SiteGitHub: this.$t('仕組み')
              }
            )
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content:
            this.$t('北海道') +
            ' ' +
            this.$t('新型コロナウイルス{mobileBreak}まとめサイト', {
              mobileBreak: ''
            })
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://stopcovid19.hokkaido.dev${this.$route.path}`
        },
        ogLocale,
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            this.$t('北海道') +
            ' ' +
            this.$t('新型コロナウイルス{mobileBreak}まとめサイト', {
              mobileBreak: ''
            })
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            this.$t(
              '当サイトは、道内の新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために作成されました。開発は、ICTエンジニアやデザイナーなどによって結成された「JUST道IT」が行っています。'
            ) +
            ' ' +
            this.$t(
              '複製・改変が許されたオープンソースライセンスで公開されている、{tokyoCovid19Site}の{tokyoCovid19SiteGitHub}を利用しています。',
              {
                tokyoCovid19:
                  this.$t('東京都公式新型コロナウイルス対策サイト') +
                  ' ( https://stopcovid19.metro.tokyo.lg.jp/ )',
                tokyoCovid19SiteGitHub: this.$t('仕組み')
              }
            )
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://stopcovid19.hokkaido.dev/ogp.png'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://stopcovid19.hokkaido.dev/ogp.png'
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content:
            this.$t('北海道') +
            ' ' +
            this.$t('新型コロナウイルス{mobileBreak}まとめサイト', {
              mobileBreak: ''
            })
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.app {
  max-width: 1440px;
  margin: 0 auto;
  background-color: inherit !important;
}
.appContainer {
  position: relative;
  @include largerThan($small) {
    display: grid;
    grid-template-columns: 268px auto;
  }
  @include largerThan($huge) {
    grid-template-columns: 325px auto;
  }
}
@include largerThan($small) {
  .naviContainer {
    grid-column: 1/2;
    position: fixed;
    top: 0;
    overflow-y: auto;
    width: 268px;
    height: 100vh;
  }
}
@include largerThan($huge) {
  .naviContainer {
    width: 325px;
  }
}
.open {
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
}
.mainContainer {
  grid-column: 2/3;
  overflow: hidden;
  @include lessThan($small) {
    .container {
      padding-top: 16px !important;
    }
  }
}
.loader {
  height: 200px;
  width: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  img {
    display: block;
    margin: 0 auto 20px;
  }
}

.embed {
  .container {
    padding: 0 !important;
  }
  .DataCard {
    padding: 0 !important;
  }
}
</style>
