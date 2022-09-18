module.exports = {
	presets: [["@babel/env", {
		bugfixes: true,
		shippedProposals: true,
		targets: { node: "18.9.0" }
	}], ["@babel/react", {
		runtime: "automatic"
	}]]
};
