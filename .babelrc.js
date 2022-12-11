module.exports = {
	presets: [
		[
			"@babel/preset-react",
			{
				modules: false
			}
		]
	],
	env: {
		test: {
			presets: ["@babel/preset-react"],
			plugins: [
				[
					'module-resolver',
					{
						root: './src'
					}
				]
			]
		}
	}
};
