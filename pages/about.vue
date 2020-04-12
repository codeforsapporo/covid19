<template>
  <div class="About">
    <h2 class="About-Heading">
      {{ $t('当サイトについて') }}
    </h2>
    <TextCard>
      {{
        $t(
          '当サイトは、道内の新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために作成されました。開発は、ICTエンジニアやデザイナーなどによって結成された「JUST道IT」が行っています。'
        )
      }}
      <br />
      <br />
      <i18n
        path="複製・改変が許されたオープンソースライセンスで公開されている、{tokyoCovid19Site}の{tokyoCovid19SiteGitHub}を利用しています。"
        tag="span"
      >
        <template #tokyoCovid19Site>
          <a
            target="_blank"
            rel="noopener"
            href="https://stopcovid19.metro.tokyo.lg.jp/"
            >{{ $t('東京都公式新型コロナウイルス対策サイト') }}</a
          >
        </template>
        <template #tokyoCovid19SiteGitHub>
          <a
            target="_blank"
            href="https://github.com/tokyo-metropolitan-gov/covid19"
            rel="noopener"
            >{{ $t('仕組み') }}</a
          >
        </template>
      </i18n>
      <br />
      <br />
      {{
        $t(
          '北海道による公式情報と客観的な数値をわかりやすく伝えることで、北海道にお住まいの方や、北海道内に拠点を持つ企業の方、北海道を訪れる方が、現状を把握して適切な対策を取れるようにすることを目的としています。'
        )
      }}
      <br />
      <br />
      <i18n
        path="紹介などに{infoPrintPage}のページをぜひご利用ください。"
        tag="span"
      >
        <template #infoPrintPage>
          <a target="_blank" rel="noopener" :href="localePath('/print/info')">{{
            $t('こちら')
          }}</a>
        </template>
      </i18n>
      <br />
      {{
        $t(
          '複製・配布は自由です。ご自由にコピーまたはプリントアウトしてご利用ください。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('ブラウザ環境について')">
      {{ $t('当サイトは以下の環境でご覧いただくことを推奨いたします。') }}<br />
      <br />
      {{ $t('Microsoft Edge 最新版') }}<br />
      {{ $t('Mozilla Firefox 最新版') }}<br />
      {{ $t('Google Chrome 最新版 (Windows10以上)') }}<br />
      {{ $t('Apple Safari (OS X) 最新版') }}<br />
      {{ $t('Opera Software ASA Opera 最新版') }}<br />
      <br />
      {{
        $t(
          '※ 推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。'
        )
      }}
    </TextCard>
    <a id="data" name="data" />
    <TextCard :title="$t('データについて')">
      {{
        $t(
          '当サイトのデータは、北海道および札幌市が公開しているデータを取得・加工する事により更新されています。'
        )
      }}<br />
      {{
        $t(
          '北海道および札幌市のご尽力の結果、当初の「HTMLのスクレイピング」から「オープンデータサイトからの取得」への移行が実現しています。行政関係者各位のご協力に感謝します。'
        )
      }}<br />
      <br />
      {{ $t('現在利用しているデータは以下の通りです。') }}<br />
      <ul>
        <li>
          <a
            href="https://www.harp.lg.jp/opendata/dataset/1369.html"
            target="_blank"
            rel="noopener"
          >
            {{ $t('新型コロナウイルス感染症に関するデータ') }}
          </a>
          <ul>
            <li>{{ $t('陽性患者の属性 (patients)') }}</li>
            <li>
              {{
                $t(
                  '検査数、陽性患者数、現在患者数（軽症・中等症、重症）、死亡数、陰性確認済み数 (covid19_data)'
                )
              }}
            </li>
          </ul>
        </li>
        <li>
          <a
            href="https://ckan.pf-sapporo.jp/dataset/covid_19_soudan"
            target="_blank"
            rel="noopener"
          >
            {{
              $t(
                '札幌市窓口における新型コロナウイルス（COVID-19）に関する電話相談件数'
              )
            }}
          </a>
          <ul>
            <li>{{ $t('日別窓口相談件数（札幌市保健所） (contacts)') }}</li>
            <li>{{ $t('日別電話相談件数 （札幌市保健所） (querents)') }}</li>
          </ul>
        </li>
      </ul>
      <br />
      {{
        $t(
          '当サイトの制作にあたり、上記のデータを加工しWebAPIを構築しました。仕様に沿ってリクエストする事により全てのデータを取得出来ます。'
        )
      }}<br />
      <a
        href="https://codeforsapporo.github.io/covid19hokkaido_webapi/"
        target="_blank"
        rel="noopener"
      >
        WebAPI仕様</a
      >
      <br />
      <br />
      <a
        href="https://creativecommons.org/licenses/by/4.0/deed.ja"
        target="_blank"
        rel="noopener"
      >
        <img src="/cc-by.svg" alt="CC BY 4.0" /><br />
        {{
          $t(
            'このサイトのすべてのデータは「クリエイティブ・コモンズ 表示 4.0 国際」にて提供されています。'
          )
        }}</a
      >
    </TextCard>
    <TextCard :title="$t('当サイトへのリンクについて')">
      {{ $t('当サイトへのリンクは自由です。') }}
    </TextCard>
    <TextCard :title="$t('JavaScriptについて')">
      {{ $t('当サイトではJavaScriptを使用しております。') }}<br />
      {{
        $t(
          'JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。'
        )
      }}<br />
      {{
        $t(
          '当サイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('クッキー (Cookie) について')">
      {{ $t('当サイトの一部ではクッキーを使用しています。') }}<br />
      {{
        $t(
          'クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。'
        )
      }}<br />
      <br />
      {{
        $t(
          'ブラウザに関する情報の収集を希望しない場合は、インターネット閲覧ソフト（ブラウザ）をご自身で設定することにより、クッキーの機能が働かないようにすることも可能です。'
        )
      }}<br />
      <br />
      {{
        $t(
          'ただし、クッキーを受け入れない設定をされている場合は、当サイトの機能が正常に動作しない場合がございます。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('Google Analyticsの利用について')">
      {{
        $t(
          '当サイトでは、サービス向上やWebサイトの改善のためにGoogle Inc.の提供するアクセス分析のツールであるGoogle Analyticsを利用した計測を行っております。'
        )
      }}<br />
      {{
        $t(
          'Google Analyticsは、当サイトが発行するクッキー(Cookie)を利用して、個人を特定する情報を含まずにWebサイトの利用データ（アクセス状況、トラフィック、閲覧環境など）を収集しております。クッキー(Cookie)の利用に関してはGoogleのプライバシーポリシーと規約に基づいております。'
        )
      }}<br />
      {{
        $t(
          '取得したデータはWebサイト利用状況の分析、サイト運営者へのレポートの作成、その他のサービスの提供に関わる目的に限り、これを使用します。'
        )
      }}<br />
      <br />
      {{
        $t(
          'Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google Analyticsのサイトをご覧ください。'
        )
      }}<br />
      <ul>
        <li>
          <a
            href="https://marketingplatform.google.com/about/analytics/terms/jp"
            target="_blank"
            rel="noopener"
          >
            {{ $t('Google Analytics利用規約') }}
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/privacy?hl=ja"
            target="_blank"
            rel="noopener"
          >
            {{ $t('Googleのプライバシーポリシー') }}
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/analytics/answer/6004245"
            target="_blank"
            rel="noopener"
          >
            {{ $t('Google Analyticsに関する詳細情報') }}
          </a>
        </li>
      </ul>
    </TextCard>
    <TextCard :title="$t('免責事項')">
      {{
        $t(
          '当サイトに掲載されている情報については、北海道または札幌市によって公開されたデータですが、北海道および札幌市、当サイトの開発者・関係者は、利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。'
        )
      }}<br />
      <br />
      {{
        $t(
          'また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。'
        )
      }}<br />
      <br />
      {{
        $t(
          '当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('JUST道ITへ参加したい')">
      <i18n
        path="JUST道ITでの取り組みに共感し、開発・運営に参加を希望される方は、{codeForSapporoSlack}よりご参加ください。"
        tag="span"
      >
        <template #codeForSapporoSlack>
          <a
            target="_blank"
            href="https://www.codeforsapporo.org/slack/"
            rel="noopener"
            >{{ $t('Code for Sapporo Slack ワークグループ') }}</a
          >
        </template>
      </i18n>
    </TextCard>
    <!-- カタログサイトリンクおよびお問い合わせ先は現時点では表示しない
    <TextCard title="データについて">
      当サイトで公表しているデータは、北海道オープンデータカタログサイト(準備中)より誰でも自由にダウンロードが可能です。
    </TextCard>
    -->
    <TextCard :title="$t('お問い合わせ先')">
      <i18n
        path="当サイトについてのお問い合わせは{justDouItFacebookPage}までお願いします。"
        tag="span"
      >
        <template #justDouItFacebookPage>
          <a
            target="_blank"
            href="https://www.facebook.com/Justdouit19/"
            rel="noopener"
            >{{ $t('JUST道IT Facebookページ') }}</a
          >
        </template>
      </i18n>
    </TextCard>

    <TextCard title="">
      <img src="/ogp.png" />
      <i18n path="Illustration by {LITTLEKIT} under {ccBy}">
        <template #LITTLEKIT>
          <a href="https://twitter.com/LITTLEKIT">{{ $t('LITTLEKIT') }}</a>
        </template>
        <template #ccBy>
          <a href="https://creativecommons.org/licenses/by/4.0/deed.ja">{{
            $t('CC BY 4.0')
          }}</a>
        </template>
      </i18n>
    </TextCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import TextCard from '@/components/TextCard.vue'

export default Vue.extend({
  components: {
    TextCard
  },
  head(): MetaInfo {
    return {
      title:
        this.$t('当サイトについて') +
        ' | ' +
        this.$t('北海道') +
        ' ' +
        this.$t('新型コロナウイルス{mobileBreak}まとめサイト', {
          mobileBreak: ''
        })
    }
  }
})
</script>

<style lang="scss" scoped>
.About {
  &-Heading {
    @include font-size(30);

    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}

a {
  @include text-link();
}
</style>
