# playwright-testing-lab

Playwright × TypeScript で E2E テストを書いた学習用のリポジトリです。

学んだことは Qiita の記事にまとめています。
- Qiita：https://qiita.com/qa_risa/items/8f6b00678337c0a870d2

## やったこと

| ファイル | 内容 |
| --- | --- |
| `tests/github-search.ts` | GitHub で検索してリンクを開く操作を自動化（ts-node で直接実行） |
| `tests/testcase/` | python.org の検索機能のテスト（Page Object Model） |
| `tests/ecomtestcase/` | テスト用 EC サイトの会員登録のテスト（Page Object Model） |
| `playwright.config.ts` | Trace Viewer と HTML レポートの設定 |

## フォルダ構成

```
playwright-project/
├── playwright.config.ts
├── package.json
└── tests/
    ├── github-search.ts
    ├── testcase/          # python.org の検索テスト
    │   ├── base/          # 共通の親クラス
    │   ├── locators/      # 要素の探し方
    │   ├── pages/         # 画面ごとの操作
    │   └── specs/         # テスト本体
    └── ecomtestcase/      # EC サイトの会員登録テスト
        ├── base/
        ├── locators/
        ├── pages/
        └── specs/
```

## 動作確認環境

| 項目 | バージョン |
| --- | --- |
| Playwright | 1.65.0 |
| TypeScript | 5.9.3 |
| Node.js | 26.10.0 |
| OS | macOS |

## セットアップ

```bash
cd playwright-project
npm install
npx playwright install chromium
```

## 実行方法

すべてのテストを実行する。

```bash
npx playwright test
```

テストを1つだけ実行する。

```bash
npx playwright test tests/testcase/specs/python-org-search.spec.ts
npx playwright test tests/ecomtestcase/specs/account-registration.spec.ts
```

画面を表示して実行する。

```bash
npx playwright test --headed
```

GitHub 検索のスクリプトを実行する。

```bash
npx ts-node tests/github-search.ts
```

結果を確認する。

```bash
npx playwright show-report
npx playwright show-trace test-results/<フォルダ名>/trace.zip
```

## 注意

- 外部サイト（GitHub、python.org、tutorialsninja.com）を使っています。サイトの画面が変わると、テストが失敗することがあります
- 会員登録のテストは、同じメールアドレスでは2回登録できません。実行する前に `tests/ecomtestcase/pages/register-page.ts` のメールアドレスを変えてください
- コードには、動きを目で確認するための `waitForTimeout`（固定時間の待機）が入っています。Playwright は操作の前に自動で待つので、通常のテストでは不要です

## 今後の改善

- [ ] `waitForTimeout` を消す
- [ ] ロケーターを `getByRole` などに書き換える
- [ ] 結果の確認を `expect(locator).toBeVisible()` などに書き換える
- [ ] メールアドレスを実行ごとに自動で作る
- [ ] 会員登録のエラーケースのテストを追加する
- [ ] GitHub Actions でテストを自動実行する

## 参考

- [Playwright 公式ドキュメント](https://playwright.dev/docs/intro)
- [Locators](https://playwright.dev/docs/locators)
- [Page object models](https://playwright.dev/docs/pom)
- [Trace viewer](https://playwright.dev/docs/trace-viewer)
