const PrefixWrap = require('postcss-prefixwrap');
module.exports = () => ({
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		PrefixWrap('.shotstack-mergefield-form')
	]
});
