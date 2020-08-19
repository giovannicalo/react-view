import generateRandomColor from "./generate-random-color";

const generateDebugStyle = () => {
	return global.debugViews ? {
		backgroundColor: generateRandomColor()
	} : {};
};

export default generateDebugStyle;
