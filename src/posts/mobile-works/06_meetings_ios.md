---
name: 'Meetings for iOS'
thumbnails: ['/images/thumbnails/meetings-ios00.png', '/images/thumbnails/meetings-ios01.png', '/images/thumbnails/meetings-ios02.png']
headerImage: '/images/headers/meetings-ios.png'
---

# Meetings for iOS

## 概要
iOS向けのアカウント制掲示板アプリです。

## 特徴
- アカウント制となっており、スレッドやコメントの投稿にはログインが必要
- スレッドにはタグを付けることができる
- コメントには画像を添付できる

## こだわったこと
- Web版と統一感のあるUI

## 制作時期
2022年9月頃

## 使用技術
- Swift
- SwiftUI
- Firebase
  - Authentication
  - Cloud Firestore
  - Cloud Storage

## リンク
- [ソースコード](https://github.com/Yu357/Meetings-iOS)

## 感想
アカウント制の掲示板アプリを作ってみたいと思っていたので、このアプリを制作しました。
以前Thread Hubという名前でWeb版とiOS版のある掲示板アプリを作ったのですが、プラットフォーム間でUIに統一感を持たせることができなかったことを残念に思っていました。  
今回はリベンジということで、Web版とiOS版で似たUIにすることができるように、Figmaでしっかり画面設計を行なってから開発に進みました。

TwitterやRedditといった既存のサービスのUIを参考にし、スマートフォンでも使いやすいアプリに仕上げることができました。
FirebaseとSwiftUIの知見もより深めることができ、いい経験になりました。

## スクリーンショット
<div>
  <img style="width: 30%;" src="https://user-images.githubusercontent.com/65577595/208893216-3315f3a7-83c0-4034-aa21-e2784bc3709c.PNG"/>
  <img style="width: 30%;" src="https://user-images.githubusercontent.com/65577595/208893222-0ef9c97b-2d63-4c78-b6dd-216d2601035c.PNG"/>
  <img style="width: 30%;" src="https://user-images.githubusercontent.com/65577595/208893229-53d30bf2-73d5-4086-bc6f-8f3da28f4b10.PNG"/>
  <img style="width: 30%;" src="https://user-images.githubusercontent.com/65577595/208893239-2567983b-cc5f-43e2-8199-800d7aaa09fa.PNG"/>
  <img style="width: 30%;" src="https://user-images.githubusercontent.com/65577595/208893273-9eca1f31-8ac7-49c8-9010-6d93b47534a5.PNG"/>
  <img style="width: 30%;" src="https://user-images.githubusercontent.com/65577595/208893249-bdae72b0-cf6e-40a0-9b37-5299c682201d.PNG"/>
</div>
