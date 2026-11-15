# Bloom in the City 花藝生活

依照使用者提供的首頁設計參考圖製作的繁體中文花店首頁。頁面素材已整理在 `public/images/`，包含首頁使用的本地影像與原始版面參考圖；也可下載根目錄的 `site-images.zip` 一次取得素材。

## 本地執行

使用 Node.js 18 或更新版本，在專案根目錄執行：

```sh
npm start
```

網站會在 `http://localhost:3000` 提供預覽。這是無外部套件依賴的靜態頁面。

## 靜態建置

```sh
npm run build
```

建置結果會輸出到 `dist/`，靜態頁面來源位於 `public/`。
