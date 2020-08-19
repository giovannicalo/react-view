const colors = new Set();

const generateRandomColor = () => {
	let color = null;
	while (!color || colors.has(color)) {
		color = `#${`00000${(Math.random() * 0xFFFFFF | 0).toString(16)}`.slice(-6).toUpperCase()}`;
	}
	colors.add(color);
	return color;
};

export default generateRandomColor;

