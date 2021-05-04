<template>
  <div class="Worker">
    <h2 class="Worker-Heading">
      {{ $t('企業の皆様・はたらく皆様へ.title') }}
    </h2>
    <TextCard :title="$t('中小企業向け相談窓口及び融資取扱について')">
      <a
        href="http://www.pref.hokkaido.lg.jp/kz/kks/contactinformation.htm"
        target="_blank"
        rel="noopener"
        >http://www.pref.hokkaido.lg.jp/kz/kks/contactinformation.htm</a
      >
      <br />
      {{
        $t(
          '新型コロナウイルス関連肺炎の流行に伴う中小企業向け相談窓口及び融資取扱について'
        )
      }}
    </TextCard>
    <TextCard :title="$t('新型コロナ感染症の影響による特別労働相談窓口')">
      <a
        href="http://www.pref.hokkaido.lg.jp/kz/rkr/korona1.htm"
        target="_blank"
        rel="noopener"
        >http://www.pref.hokkaido.lg.jp/kz/rkr/korona1.htm</a
      >
      <br />
      {{
        $t(
          '今般の新型コロナウイルス感染症により影響を受ける事業主、労働者の方向けの、相談窓口や各種支援措置をお知らせします。'
        )
      }}
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
        this.$t('企業の皆様・はたらく皆様へ.title') +
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
.Worker {
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
