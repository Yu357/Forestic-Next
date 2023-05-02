---
name: 'Task Notebook'
thumbnail: '/images/thumbnails/'
headerImage: '/images/headers/task-notebook.png'
---

## 概要
Android向けのTodoアプリ。タスクを完了済みに設定でき、後から振り返ることができます。

## 特徴
- 各Todoにはタイトルと詳細を入力できる
- 重要なTodoをピン止めしてわかりすく整理できる
- 文字列で検索可能
- 日々のTodo達成状況がカレンダーでわかる
- OSのテーマ切り替えに対応

## こだわったこと
- わかりやすいUIの実装
- ダークテーマの実装

## 制作時期
2021年6月頃

## 使用技術
- Kotlin
- Realm

## 感想
Achievementの次に作成したTodoアプリです。Achievementは自分の好きなようにUIを実装しましたが、より万人受けするようなUIを目指したいと思い新しくアプリを制作しました。Achievementでは登録するタスクをアチーブメントと呼んでいましたが、Task Notebookではわかりやすく「Todo」と呼称し、機能面でも使いやすいアプリになるよう調整を行いました。  
また今回の開発ではOSのテーマ切り替えに対応することを目標の一つとしており、ダークテーマ時の見栄えを考慮した配色を行いました。

テーマ切り替えに対応したことで夜はダークテーマでアプリを使用することができ、使い勝手は大幅に向上しました。また、カレンダーとグラフでTodo達成状況を可視化できるようになり、より大きな達成感を得られるようになりました。

## リンク
- [ソースコード](https://github.com/Yu357/TaskNotebook)

## スクリーンショット
<div>
  <img style="width: 30%;" src="https://user-images.githubusercontent.com/65577595/187852033-44ac9321-6e38-419c-a47b-b54a87ec2617.png"/>
  <img style="width: 30%;" src="https://user-images.githubusercontent.com/65577595/187852035-6b007a44-9f7f-4885-b373-4c7a4d03b86d.png"/>
  <img style="width: 30%;" src="https://user-images.githubusercontent.com/65577595/187852037-2114fd66-be9b-4106-81ed-3bf0bd092abd.png"/>
  <img style="width: 30%;" src="https://user-images.githubusercontent.com/65577595/187852038-00e3019f-a8c3-4047-9309-c90f9d6e50f9.png"/>
  <img style="width: 30%;" src="https://user-images.githubusercontent.com/65577595/187852046-1fa55338-6b5c-4318-b3a6-a8c4208c2e01.png"/>
  <img style="width: 30%;" src="https://user-images.githubusercontent.com/65577595/187852050-0b8e3b05-8a0f-4e7a-b5ab-45ea2edf904f.png"/>
</div>
