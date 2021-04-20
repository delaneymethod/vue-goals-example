module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/recommended',
		'eslint:recommended'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'vue/html-indent': 'off',
		'vue/html-closing-bracket-spacing': [
			'error', {
				'startTag': 'never',
				'endTag': 'never',
				'selfClosingTag': 'always'
			}
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	}
};
