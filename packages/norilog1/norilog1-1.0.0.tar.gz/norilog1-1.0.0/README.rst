============
乗りログアプリ
============


目的
====

Webブラウザーでコメントを投稿するWebアプリケーションの練習


ツールのバージョン
================


:Python:    3.7.4
:pip:       20.1.1


インストールと起動方法
===================


リポジトリーからコードを取得し、その下にvenv環境を用意します::

$ git cloe https://github.com/Watson-Sei/norilog
$ cd norilog
$ python3 -m venv venv 
$ source venv/bin/activate
( venv ) $ pip install -e .
( venv ) $ ./norilog
* Running on http://127.0.0.1:8000/


開発手順
========

依存ライブラリ変更時
-----------------


1. ``setup.py`` の ``install_requires``を更新する
2. 以下の手順で開発を更新する::
    ( venv ) $ deactivate
    $ python3 -m venv --clear venv 
    $ source venv/bin/activate
    ( venv ) $ pip3 install -e ./norilog
    ( venv ) $ pip3 freeze > requirements.txt

3. setup.py と requirements.txt をリポジトリーにコミットする

開発用インストール
-----------------


1. チェックアウトする
2. 以下の手順でインストールする::


    ( venv ) $ pip3 install -e .


