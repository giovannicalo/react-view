module.exports = {
	env: {
		test: {
			presets: [["@babel/env", {
				bugfixes: true,
				shippedProposals: true,
				targets: {
					node: "14.8.0"
				}
			}]]
		}
	},
	presets: ["@babel/react"]
};
