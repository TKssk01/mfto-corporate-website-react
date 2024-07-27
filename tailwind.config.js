module.exports = {
  content: [
    "./index.html","./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '140': '35rem',  // 140pxは35remと同等であるため、適切な値を設定
      },
    },
  },
  plugins: [],
}
