<template>
  <div class="SideNavigation">
    <div class="SideNavigation-HeadingContainer sp-flex">
      <v-icon
        class="SideNavigation-HeadingIcon sp-inline-block"
        :aria-label="$t('サイドメニュー項目を開く')"
        @click="openNavi"
      >
        mdi-menu
      </v-icon>
      <nuxt-link :to="localePath('/')" class="SideNavigation-HeadingLink">
        <div class="SideNavigation-Logo">
          <LogoAnimation
            class="SideNavigation-LogoAnimationContent"
            :alt="$t('北海道')"
          />
          <LogoAnimationSp
            class="SideNavigation-LogoAnimationSpContent"
            :alt="$t('北海道')"
          />
        </div>
        <h1 class="SideNavigation-Heading">
          <span class="SideNavigation-HeadingTitle">
            {{ $t('北海道') }}<br />
          </span>
          <i18n path="新型コロナウイルス{mobileBreak}まとめサイト" tag="span">
            <template #mobileBreak>
              <br class="SideNavigation-HeadingMobileBreak" />
            </template>
          </i18n>
        </h1>
      </nuxt-link>
    </div>
    <div class="sp-none" :class="{ open: isNaviOpen }">
      <v-icon
        class="SideNavigation-ListContainerIcon sp-inline-block"
        :aria-label="$t('サイドメニュー項目を閉じる')"
        @click="closeNavi"
      >
        mdi-close
      </v-icon>
      <div class="SideNavigation-LanguageMenu">
        <LanguageSelector />
      </div>
      <v-divider class="SideNavigation-HeadingDivider" />

      <v-list :flat="true">
        <v-container
          v-for="(item, i) in items"
          :key="i"
          :class="(isClass(item), item.class)"
          class="SideNavigation-ListItemContainer"
          @click="closeNavi"
        >
          <ListItem :link="item.link" :icon="item.icon" :title="item.title" />
          <v-divider v-show="item.divider" class="SideNavigation-Divider" />
        </v-container>
      </v-list>

      <div class="SideNavigation-Footer">
        <div class="SideNavigation-SocialLinkContainer">
          <!-- <a href="https://line.me/R/ti/p/%40822sysfc" target="_blank" rel="noopener">
            <img src="/line.png" alt="LINE" />
          </a> -->
          <a
            href="https://twitter.com/Just_douit"
            target="_blank"
            rel="noopener"
          >
            <PictureLoader
              filename="twitter"
              width="30px"
              height="30px"
              alt="Twitter"
            />
          </a>
          <a
            href="https://www.facebook.com/Justdouit19/"
            target="_blank"
            rel="noopener"
          >
            <PictureLoader
              filename="facebook"
              width="30px"
              height="30px"
              alt="Facebook"
            />
          </a>
          <a
            href="https://github.com/codeforsapporo/covid19"
            target="_blank"
            rel="noopener"
          >
            <PictureLoader
              filename="github"
              width="30px"
              height="30px"
              alt="Github"
            />
          </a>
        </div>
        <div class="SideNavigation-SponsorLinkContainer">
          {{ $t('Data by:') }}<br />
          <nuxt-link :to="{ path: localePath('/about/'), hash: '#data' }">
            <span class="no-image-title">{{ $t('北海道（政府）') }}</span
            ><br />
            <span class="no-image-title">{{ $t('札幌市') }}</span>
          </nuxt-link>

          <br />
          <a
            class="license"
            href="//creativecommons.org/licenses/by/4.0/deed.ja"
            target="_blank"
            rel="noopener"
          >
            <i18n path="Under {ccByImageTitle}{ccByImage}" tag="span">
              <template #ccByImageTitle>
                <span class="image-title">{{ $t('CC BY 4.0') }}</span>
              </template>
              <template #ccByImage>
                <PictureLoader
                  classname="cc-by-logo"
                  filename="cc-by-mini"
                  width="85.3px"
                  height="16px"
                  :alt="$t('CC BY 4.0')"
                />
              </template>
            </i18n> </a
          ><br />
          <br />
          {{ $t('Operations by:') }}<br />
          <nuxt-link :to="{ path: localePath('/about/') }">
            <span class="image-title">{{ $t('JUST道IT') }}</span>

            <PictureLoader
              classname="justdoit-logo"
              filename="justdouit"
              width="132px"
              height="46.6px"
              :alt="$t('JUST道IT')"
            />
          </nuxt-link>
          <a href="https://www.hicta.or.jp/" target="_blank" rel="noopener">
            <span class="image-title">{{ $t('北海道IT推進協会') }}</span>
            <PictureLoader
              classname="hicta-logo"
              filename="hicta"
              width="225px"
              height="60px"
              :alt="$t('北海道IT推進協会')"
            />
          </a>

          <br />
          <br />
          {{ $t('Powered by:') }}<br />
          <a href="https://www.sakura.ad.jp/" target="_blank" rel="noopener">
            <span class="image-title">{{ $t('さくらインターネット') }}</span>
            <PictureLoader
              classname="sakura-internet-logo"
              filename="sakura"
              width="176px"
              height="62px"
              :alt="$t('さくらインターネット')"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'
import LogoAnimation from '@/components/Logo-Animation'
import LogoAnimationSp from '@/components/Logo-Animation-sp.vue'
const LanguageSelector = () => import('@/components/LanguageSelector.vue')

const PictureLoader = () => import('~/components/PictureLoader.vue')

export default {
  components: {
    PictureLoader,
    LogoAnimationSp,
    LogoAnimation,
    ListItem,
    LanguageSelector
  },
  props: {
    isNaviOpen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    items() {
      let covidlink =
        'http://www.pref.hokkaido.lg.jp/hf/kth/kak/singatakoronahaien.htm#道民へ'
      if (this.$i18n.locale !== 'ja') {
        covidlink =
          'http://www.pref.hokkaido.lg.jp/ss/tsk/promo/coronavirus.htm'
      }
      return [
        {
          icon: 'mdi-chart-timeline-variant',
          title: this.$t('道内の最新感染動向'),
          link: this.localePath('/')
        },
        {
          icon: 'covid',
          title: this.$t('感染予防と相談窓口'),
          link: covidlink,
          divider: true
        },
        {
          icon: 'parent',
          title: this.$t('お子様をお持ちの皆様へ'),
          link: this.localePath('/parent')
        },
        {
          icon: 'mdi-account-multiple',
          title: this.$t('道民の皆様へ'),
          link: 'http://www.pref.hokkaido.lg.jp/ss/tkk/singatakoronahaien.htm'
        },
        {
          icon: 'mdi-domain',
          title: this.$t('企業の皆様・はたらく皆様へ.link'),
          link: this.localePath('/worker'),
          divider: true
        },
        {
          title: this.$t('北海道感染症危機管理対策本部会議'),
          link: 'http://www.pref.hokkaido.lg.jp/ss/tkk/koronataisakukaigi.htm'
        },
        // 【東京都主催等】中止または延期するイベント・説明会等
        // 道にまとまった情報がないので一旦コメントアウト
        // {
        //   title: this.$t('Cancelled public events'),
        //   link:
        //     'https://www.seisakukikaku.metro.tokyo.lg.jp/information/event02.html'
        // },
        {
          title: this.$t('特別定額給付金について'),
          link: this.$t('https://kyufukin.soumu.go.jp/ja-JP/index.html')
        },
        {
          title: this.$t('全国医療機関の医療医療体制の状況'),
          link: this.$t('https://cio.go.jp/hosp_monitoring_c19')
        },
        {
          title: this.$t('知事からのメッセージ'),
          link:
            'http://www.pref.hokkaido.lg.jp/ss/tkk/hodo/pressconference/r1.htm'
        },
        {
          title: this.$t('当サイトについて'),
          link: this.localePath('/about')
        },
        {
          title: this.$t('北海道公式ホームページ'),
          link: 'http://www.pref.hokkaido.lg.jp/index.htm'
        },
        {
          title: this.$t('北海道公式Twitter'),
          link: 'https://twitter.com/PrefHokkaido',
          divider: true
        },
        {
          title: this.$t('東京都 新型コロナウイルス感染症対策サイト'),
          link: 'https://stopcovid19.metro.tokyo.lg.jp/'
        },
        {
          title: this.$t('他地域 新型コロナウイルス感染症対策サイト一覧'),
          link:
            'https://github.com/tokyo-metropolitan-gov/covid19/blob/development/FORKED_SITES.md',
          divider: true
        }
      ]
    },
    isClass() {
      return item => (item.title.charAt(0) === '【' ? 'kerningLeft' : '')
    }
  },
  methods: {
    openNavi() {
      this.$emit('openNavi')
    },
    closeNavi() {
      this.$emit('closeNavi')
    }
  }
}
</script>

<style lang="scss" scoped>
.SideNavigation {
  position: relative;
  height: 100%;
  background: $white;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
  &-HeadingContainer {
    padding: 1.25em 0 1.25em 1.25em;
    align-items: center;
    @include lessThan($small) {
      padding: 7px 0 7px 20px;
    }
  }
  &-HeadingIcon {
    display: none;
    margin-right: 16px;
  }
  &-HeadingLink {
    @include lessThan($small) {
      display: flex;
      align-items: center;
    }

    text-decoration: none;
  }
  &-ListContainerIcon {
    display: none;
    margin: 24px 16px 24px;
  }
  &-ListItemContainer {
    padding: 2px 20px;
  }
  &-Logo {
    margin: 15px 16px 0 0;
    width: 110px;
    @include lessThan($small) {
      margin-top: 0;
    }
  }
  &-LogoAnimationContent {
    height: 50px;
    @include lessThan($small) {
      display: none;
    }
  }
  &-LogoAnimationSpContent {
    height: 45px;
    @include largerThan($small) {
      display: none;
    }
  }
  &-Heading {
    margin-top: 8px;
    font-size: 13px;
    color: #898989;
    padding: 0.5em 0;
    text-decoration: none;
    @include lessThan($small) {
      margin-top: 0;
      margin-left: 15px;
    }
  }
  &-HeadingTitle {
    @include lessThan($small) {
      display: none;
    }
  }
  &-HeadingMobileBreak {
    display: none;
    @include lessThan($small) {
      display: inline;
    }
  }
  &-HeadingDivider {
    margin: 12px 20px 4px;
    @include lessThan($small) {
      display: none;
    }
  }
  &-Divider {
    margin: 12px 0;
  }
  &-LanguageMenu {
    padding: 0 20px;
    background: #fff;
  }
  &-Footer {
    padding: 20px;
    background-color: $white;
  }
  &-SponsorLinkContainer {
    overflow: visible;
    padding-top: 0.8rem;
    white-space: normal;
    font-size: 0.82rem;
    color: $gray-1;
    & a {
      color: #333;
      text-decoration: none;
    }
    & a:hover {
      opacity: 0.6;
    }
    & picture {
      padding-bottom: 0.9rem;
    }
    & picture.justdouit-logo {
      margin: 0 0 0 -3px;
      width: 132px;
    }
    & picture.sakura-internet-logo {
      margin: -6px 0 0 -14px;
      width: 176px;
    }
    & .image-title {
      display: inline-block;
      width: 0;
      height: 1.5rem;
      overflow: hidden;
    }
    & .no-image-title {
      display: inline-block;
      line-height: 1.8rem;
      color: #444;
      font-size: 1.5rem;
      font-weight: 400;
    }
    & .cc-by-logo {
      width: auto;
      height: 1.8rem;
      vertical-align: text-top;
    }
    & a.license {
      display: inline-block;
      margin: -0.7rem 0 0.2rem 0;
    }
  }
  &-Copyright {
    display: block;
    margin-top: 10px;
    font-size: 8px;
    line-height: 1.2;
    color: $gray-1;
    font-weight: bold;
  }
  &-SocialLinkContainer {
    display: flex;
    & picture {
      width: 30px;
      margin-right: 10px;
    }
  }
}
.open {
  @include lessThan($small) {
    position: absolute;
    top: 0;
    left: 0;
    display: block !important;
    width: 100%;
    z-index: 100;
    background-color: $white;
  }
}
@include lessThan($small) {
  .sp-flex {
    display: flex;
  }
  .sp-inline-block {
    display: inline-block;
  }
  .sp-none {
    display: none;
  }
}
.kerningLeft {
  text-indent: -0.5em;
}
</style>
