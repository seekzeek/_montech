const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    borderRadius: {
      radius5: "5px",
      radius16: "16px",
      radius35: "35px",
    },

    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        aventir: ["Aventir", "sans-serif"],
      },

      colors: {
        custom: {
          primary: withOpacity("--primary-color"),
          secondary: withOpacity("--secondary-color"),
          accent: withOpacity("--accent-color"),
          "green-color": withOpacity("--green-color"),
          grey1: withOpacity("--grey-1"),
          grey2: withOpacity("--grey-2"),
          grey3: withOpacity("--grey-3"),
          grey4: withOpacity("--grey-4"),
          "bg-color": withOpacity("--bg-color"),
        },
      },
    },

    screens: {
      sm: "640px",

      md: "750px",

      mlx: "960px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
