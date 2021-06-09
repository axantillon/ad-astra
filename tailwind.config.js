const production = !process.env.ROLLUP_WATCH;
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        blueShadow: "0px 0px 25px 5px #BFDBFE"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: [
     "./src/**/*.svelte",

    ],
    enabled: production // disable purge in dev
  },
}
