module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      "0": "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      "245": "245px"
    },
    extend: {
      spacing: {
        "3.5": "14px",
        "5.5": "22px",
        "15": "60px",
        "18": "72px",
        "30": "120px",
        "42": "168px",
        "445": "445px"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
