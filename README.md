# react-optimized-connpass-ui
ReactでCONNPASSのカレンダーを実装する

## 環境
- React
- TypeScript(後々)
- Docker(docker-compose)

<br>

## 環境構築手順
1. リポジトリをクローンしてディレクトリ移動
```sh
git clone https://gitlab.com/Takayyz/react-optimized-connpass-ui.git && cd react-optimized-connpass-ui
```

2. コンテナ起動
```sh
docker-compose up -d
```

3. ブラウザで[localhost:3000](http://localhost:3000)にアクセス

<br>

## やりたいこと
- CONNPASSのUI改善
- 気になる勉強会の週間予定を表示
  - お気に入りの「ワード」登録
  - 気になる勉強会を検索できる
    - 毎回検索ではなくて、お気に入りした「ワード」にマッチした勉強会がデフォルトで表示される
- 勉強会全件を週&&タイムラインで表示

## 使用するAPI
- https://connpass.com/about/api/

## イメージ
![](https://res.cloudinary.com/takayyz/image/upload/v1634477909/React/wire.png)

