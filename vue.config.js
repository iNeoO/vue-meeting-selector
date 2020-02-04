module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/scss/_colors.scss";
        `,
      },
    },
  },
};
