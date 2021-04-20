module.exports = {
	css: {
		requireModuleExtension: false,
		loaderOptions: {
			sass: {
				indentedSyntax: true,
				additionalData: `
					@import "@/assets/scss/_variables.scss";
					@import "@/assets/scss/main.scss";
				`
			}
		}
	}
};
