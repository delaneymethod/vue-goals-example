module.exports = {
	css: {
		requireModuleExtension: false,
		loaderOptions: {
			sass: {
				additionalData: `
					@import "@/assets/scss/_variables.scss";
					@import "@/assets/scss/main.scss";
				`
			}
		}
	}
};
