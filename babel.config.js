module.exports = {
	env: {
		test: {
			presets: [["@babel/env", {
				bugfixes: true,
				shippedProposals: true,
				targets: {
					node: "16.1.0"
				}
			}]]
		}
	},
	presets: [["@babel/react", {
		runtime: "automatic"
	}]]
};
