module.exports = {
	presets: [["@babel/env", {
		bugfixes: true,
		shippedProposals: true,
		targets: { node: "26.8.1" }
	}], ["@babel/react", {
		runtime: "automatic"
	}]]
};
