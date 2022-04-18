module.exports = {
	presets: [["@babel/env", {
		bugfixes: true,
		shippedProposals: true,
		targets: { node: "17.9.0" }
	}], ["@babel/react", {
		runtime: "automatic"
	}]]
};
