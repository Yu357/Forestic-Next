---
title: 'Todo Diaries'
thumbnails: ['/images/thumbnails/todo-diaries00.png', '/images/thumbnails/todo-diaries01.png', '/images/thumbnails/todo-diaries02.png']
headerImage: '/images/headers/todo-diaries.png'
---

# Todo Diaries

## 概要
iOS向けのTodoアプリです。達成したTodoを後から振り返ることができます。

## 特徴
- データはクラウド上に保存される
- コンテキストメニューやスワイプアクションにより、少ないタップ数で操作が可能

## こだわったこと
- クラウドデータベースを利用し、複数のデバイスで同じデータを閲覧できるようにする
- 日常生活での使いやすさ

## 制作時期
2022年3月頃

## 使用技術
- Swift
- SwiftUI
- Firebase
  - Cloud Firestore
  - Authentication

## リンク
- [ソースコード](https://github.com/Yu357/TodoDiaries)

## 感想
当時Firebaseの利用について学んでおり、クラウドデータベースを利用したアプリに憧れていたので、このアプリを制作しました。
Todo Memoriesと違いデータをクラウド上に保存しているので、複数のiOSデバイスで同じデータを共有できます。

今回の開発で初めてiOSアプリにFirebaseを取り入れ、データベースにCloud Firestore、認証にAuthenticationを採用しました。
FirestoreでのCRUDの実装やAuthenticationを用いたログイン画面の作成などは初めてでしたが、なんとか実装できました。

UIの改善以外にも、タップ数を減らすというUXの改善を重ねており、かなり使いやすいアプリになっています。2023年2月現在、今もこのTodo Diariesを毎日使って生活しています。  
Todoの整理も振り返りも使い勝手がよく、私の生活に無くてはならないアプリです!

## スクリーンショット
<div>
    <img style="width: 30%" src="https://user-images.githubusercontent.com/65577595/187866777-2ec98532-80ab-4231-89f4-0bf93123e4b2.png"/>
    <img style="width: 30%" src="https://user-images.githubusercontent.com/65577595/187867052-59996553-c0f1-4db8-8da9-9ce08fb534bf.png"/>
    <img style="width: 30%" src="https://user-images.githubusercontent.com/65577595/187866787-768862c7-1dd9-4583-a9b0-a42cf08ba02b.png"/>
    <img style="width: 30%" src="https://i.imgur.com/9pnp9pB.png"/>
    <img style="width: 30%" src="https://i.imgur.com/1Y5il0D.png"/>
    <img style="width: 30%" src="https://user-images.githubusercontent.com/65577595/214471327-0f41cb39-b08e-4a3c-af73-b839a1311e73.png"/>
</div>
