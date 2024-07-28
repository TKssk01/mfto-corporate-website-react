module.exports = {
  content: [
    "./public/index.html",  // publicフォルダー内のindex.htmlをスキャン対象に追加
    "./src/**/*.{js,jsx,ts,tsx}",  // srcフォルダー内の全てのJavaScript/TypeScriptファイルをスキャン対象に追加
  ],
  theme: {
    extend: {
      spacing: {
        '140': '35rem',  // カスタムスペーシングの値を追加
      },
    },
  },
  plugins: [],
}
