// tailwind.config.js

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./app/**/**/*.{js,jsx,ts,tsx}", // Adjusted to include all nested directories
    "./app/(tabs)/hello/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
