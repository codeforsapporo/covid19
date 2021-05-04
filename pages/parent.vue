<template>
  <div class="Parent">
    <h2 class="Parent-Heading">
      {{ $t('臨時休校中の新型コロナウイルス感染症対応についてのお願い') }}
    </h2>
    <TextCard :title="$t('1 感染予防・健康管理')">
      <ul>
        <li>
          {{
            $t(
              '不特定多数の人の集まる場所等への外出を避け、基本的に自宅で過ごしてください。'
            )
          }}
        </li>
        <i18n
          path="手洗い、咳エチケット等により、感染予防に努めてください。 {howToWashHands}"
          tag="li"
        >
          <template #howToWashHands>
            <a
              href="http://www.pref.hokkaido.lg.jp/hf/kth/tearai.pdf"
              target="_blank"
              rel="noopener"
              >{{ $t('正しい手の洗い方 [PDF]') }}</a
            >
          </template>
        </i18n>
        <li>
          {{
            $t(
              '規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。'
            )
          }}
        </li>
      </ul>
    </TextCard>
    <TextCard :title="$t('2 感染症を疑う場合の対応')">
      <ul>
        <li>
          {{
            $t(
              '風邪の症状や、37.5度以上の発熱が４日以上続いている、強いだるさ（倦怠感）、息苦しさ（呼吸困難）がある場合は、各保健所にご相談ください。'
            )
          }}
        </li>
        <li>
          {{ $t('相談窓口及び帰国者・接触者相談センターについて') }}<br />
          <a
            href="http://www.pref.hokkaido.lg.jp/ss/ssa/koronasoudantoiawase.htm"
            target="_blank"
            rel="noopener"
            >http://www.pref.hokkaido.lg.jp/ss/ssa/koronasoudantoiawase.htm</a
          >
        </li>
      </ul>
    </TextCard>
    <TextCard :title="$t('3 その他')">
      <ul>
        <li>{{ $t('詳細は、各学校からのお知らせ等をご確認ください。') }}</li>
      </ul>
    </TextCard>
  </div>
</template>

<script>
const TextCard = () => import('@/components/TextCard.vue')
export default {
  components: {
    TextCard
  },
  head() {
    return {
      title:
        this.$t('お子様をお持ちの皆様へ') +
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
.Parent {
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
