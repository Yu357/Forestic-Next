---
title: 'Meetings for Web'
thumbnail: '/images/thumbnails/meetings-web.png'
headerImage: '/images/headers/meetings-web.png'
---

# Meetings for Web

## 概要
Web向けのアカウント制掲示板アプリです。  
スレッド内でコメントを投稿し合うことで、ユーザー同士が交流することができます。

## 特徴
- スレッドやコメントの投稿にはログインが必要
- 閲覧だけの利用ならログインは不要
- スレッドにはタグを付けることができ、検索に役立つ 
- コメントには画像を添付することができ、好きな景色や料理の写真を共有できる
- OSのテーマと連動してアプリのテーマが切り替わる

## こだわったこと
- ダークテーマの実装
- 3カラムレイアウトでのレスポンシブデザイン
- iOS版と統一感のあるUI

## 制作時期
2022年11月頃

## 使用技術
- React
- TypeScript
- Tailwind CSS
- Firebase
  - Cloud Firestore
  - Authentication
  - Cloud Storage

## リンク
- [ソースコード](https://github.com/Yu357/Meetings-Web)
- [Webサイト](https://meetings-7dad0.web.app)

## 感想
少し前にThread Hubという掲示板アプリのWeb版とiOS版を制作したのですが、両者でUIに統一感を出すことが出来なかったことを残念に思っていました。今回はリベンジということで、UIに統一感を持たせつつWeb版とiOS版のある掲示板アプリを制作しました。

事前に行った画面設計のおかげでMeetingsのWeb版はiOS版と似たUIを実装することができ、目標を達成することができました。また画像の投稿・表示を実装し、Webにおける画像の扱い方を学ぶことができました。

今回の開発ではTypeScriptとTailwind CSSという2つの新技術を採用しました。  
TypeScriptはJavaScriptを改良して作られたプログラミング言語で、変数や引数のデータ型を厳密に指定できる静的型付け言語です。データ型のエラーをコンパイル時に知ることができ、効率的に開発できるようになりました。  
Tailwind CSSはユーティリティファーストがコンセプトのCSSフレームワークです。スタイルを設定するためにわざわざ別ファイルを作ったりクラス名を考える手間が無くなり、UIの実装がとても楽になりました。

同じ掲示板アプリであるThread Hubに比べると、Meetingsはかなり大規模な作品です。しかしTypeScriptとTailwind CSSが開発効率を高めてくれたおかげで、苦労せず開発することができました。

## スクリーンショット
![](https://user-images.githubusercontent.com/65577595/198840392-81db60ca-f3cb-476c-a7f2-90e09fc9fab4.png)
![](https://user-images.githubusercontent.com/65577595/198840406-a103b317-5b2a-438f-9d40-c68f31f688eb.png)
![](https://user-images.githubusercontent.com/65577595/198840413-97f75506-5a0d-48db-8d6a-59c4a427acd1.png)
![](https://user-images.githubusercontent.com/65577595/198840421-186aff86-120e-4b70-b88f-373485f4d031.png)

<div>
    <img style="width: 48%" src="https://user-images.githubusercontent.com/65577595/198840452-e1ad44f3-c9f5-4a94-b938-9e2fd8d20951.png"/>
    <img style="width: 48%" src="https://user-images.githubusercontent.com/65577595/198840455-9d74f016-40b8-4f88-8ff8-a02b196625b8.png"/>
</div>
