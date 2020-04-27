# 新型コロナウイルス感染症対策サイト北海道版
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

![](https://github.com/codeforsapporo/covid19/workflows/production%20deploy/badge.svg)

<img src="resources/illust_19vs39_1.jpg" width="300">

Illustration by [LITTLEKIT](https://twitter.com/LITTLEKIT) under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.ja)

## Goal
東京都庁による[新型コロナウイルス感染症対策サイト](https://stopcovid19.metro.tokyo.lg.jp/)の北海道版をつくるべや

![Tokyo](resources/tokyo_covid19.gif)


<img src="https://user-images.githubusercontent.com/4961152/76155868-a48bae80-6135-11ea-9fdb-7c91a925f9f5.png" width="500">

[北海道版稼働イメージ(適宜更新)](https://docs.google.com/presentation/d/1IX5BiHa_Ukv7rulCf0RxOZpNoZmWXIvyRYFgXxg3zS8/edit?usp=sharing)

## How to Contribute / 貢献の仕方
[Issues](https://github.com/codeforsapporo/covid19/issues) にあるいろいろな修正にご協力いただけると嬉しいです。

Code for Sapporo のSlackでも情報共有を行っています。加入は[こちらからどうぞ](https://www.codeforsapporo.org/slack/)

本プロジェクトに関係するチャンネルは下記になります。
```
全般の相談
#0201covid19hkd_all
システム関係
#0202covid19hkd_sys
データ関係
#0203covid19hkd_data
Githubのissueメンション
#0204covid19hkd_notify
```

詳しくは[貢献の仕方](./.github/CONTRIBUTING.md)を御覧ください。


All contributions are welcome!
Please check [How to contribute](./.github/CONTRIBUTING.md) for details.

## License / ライセンス
本ソフトウェアは、MITライセンスの元提供されています。 
This software is released under the MIT License.

## For Developers / 開発者向け情報

### How to Set Up Environments / 環境構築の手順

#### Use yarn / yarn を使う場合**
``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

#### Use docker / docker compose を使う場合
```bash 
# serve with hot reload at localhost:3000
$ docker-compose up
```

* `docker-compose up` 初回実行時に下記のエラーが出た場合

```
yarn run v1.21.1
$ cross-env NODE_ENV=development nuxt-ts
covid19 | /bin/sh: cross-env: not found
error Command failed with exit code 127.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
covid19 exited with code 127
```

なんらかの理由で`yarn install`が失敗していると考えられるので、下記を実行後、再度 `docker-compose up` してみてください。

```bash
$ docker-compose exec app sh
/app # yarn install
/app # exit
```

#### Use npm / npm を使う場合
``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

### Deployment to Staging & Production Environments / ステージング・本番環境への反映

`master` ブランチがアップデートされると、自動的に `production` ブランチにHTML類がbuildされます。そして、本番サイト https://stopcovid19.hokkaido.dev が更新されます。

`development` ブランチがアップデートされると、自動的に `dev-pages` ブランチにHTML類がbuildされます。そして、開発用サイト https://stopcovid19-dev.hokkaido.dev と http://133.242.52.161:58000 が更新されます。


When `master` branch is updated, the HTML files will be automatically built onto `production` branch,
and then the production site (https://stopcovid19.hokkaido.dev) will be also updated.（under construction）

When `development` branch is updated, the HTML files will be automatically built onto `dev-pages` branch,
and then the development site (https://stopcovid19-dev.hokkaido.dev and http://133.242.52.161:58000) will be also updated.


### 東京都版との整合性についての方針

forkした後の更新が激しいので（東京都版、北海道版共に）、機械的なmergeはせず必要なものがあれば都度cherry-pickする方針とします。


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Nekoya3"><img src="https://avatars1.githubusercontent.com/u/17000370?v=4" width="100px;" alt=""/><br /><sub><b>Taiyu Yoshizawa</b></sub></a><br /><a href="https://github.com/Nekoya3/covid19/commits?author=Nekoya3" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!