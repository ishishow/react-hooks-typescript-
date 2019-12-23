# React-tutorial

React チュートリアルで用いられるまるばつゲームを Typescript を使って作成する

## やってはいけないこと

Master ブランチで作業したり、develop ブランチで作業すること。必ず、develop ブランチに移動してそこから新しくブランチを切って自分たちの作業をすること

## クローンとブランチ作成の手順

1. `git clone https://github.com/7-Generations/React-tutorial.git`をする
1. `git branch`で今自分のいるブランチを確認する
1. develop ブランチがすでに作成されていると思うので、`git checkout develop`で移動する
1. 移動した develop ブランチの中にいることを`git branch`で確認し、確認できたら、`git branch <任意のブランチ名(英語)>`でかく。<>は実際にかく時は省略すること
1. これでクローンとブランチの作成はできたと思う
   **なお作業するエディタは Visual Studio Code が望ましい**

## git clone で入れたあと

- cd コマンドで react-ts-app まで移動する(移動できたかチェック)
- ls コマンドやらで移動できたことが確認できたら、yarn install か yarn i 　か yarn 　をターミナルやコマンドプロンプトでうつ

## よく使う git コマンド

[Qiita の記事](https://qiita.com/naoki_mochizuki/items/50e48c18908e493dfc75)

- `git add .`
- `git commit -m '何をしたのかをかく'`
- `git push <任意のブランチ名>`
- `git pull <任意のブランチ名>`
- `git merge <任意のブランチ名>`
  **なお git は間違えても戻せることが多い(戻せないこともある)のでおかしくなったら要相談**

## React の開発環境について

- Docker を利用して作成するつもりだが、今回は使わなくても環境を合わせられると思う
- node のバージョンを合わせる(今回は 10 であればなんでもいい)。MacOS の人は nodebrew を使うのがおすすめ[macOS での nodebrew のインストールと使い方](https://qiita.com/ucan-lab/items/517ee13a2f8769ab866c)。windows の場合は nodist というのがあるみたい(使ったことないので詳しくはわからない)[windows での nodist のインストールと使い方](https://qiita.com/t_kojima/items/780b3b3133a17cceb175)
- 上記の手法で node のバージョンを 10.~~~のものにしてもらったらいい(12 くらいまであるよ)

## typescript の format について

- mac なら option + shift + F キー
- windows なら Shift + alt + fキー(ここは確かめて違ったら変更する)
