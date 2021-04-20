module.exports = {
	css: {
      requireModuleExtension: false,
      loaderOptions: {
        sass: {
          additionalData: '\n\t\t\t\t\t@import "@/assets/scss/_variables.scss";\n\t\t\t\t\t@import "@/assets/scss/main.scss";\n\t\t\t\t'
        }
      },
      extract: false
    }
};
