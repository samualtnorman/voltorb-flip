import htmlMinifierTerser from "vite-plugin-html-minifier-terser"

/** @type {import("vite").UserConfig} */
export default {
	base: "",
	plugins: [
		htmlMinifierTerser(/** @type {import("html-minifier-terser").Options} */ ({
			collapseBooleanAttributes: true,
			decodeEntities: true,
			html5: true,
			minifyCSS: true,
			minifyJS: true,
			processConditionalComments: true,
			removeAttributeQuotes: true,
			removeComments: true,
			removeEmptyAttributes: true,
			removeOptionalTags: true,
			removeRedundantAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			removeTagWhitespace: true,
			sortAttributes: true,
			sortClassName: true,
			trimCustomFragments: true,
			useShortDoctype: true
		}))
	]
}
