import generateRandomColor from "./generate-random-color";

const generateDebugStyle = () => {
	return window.debugViews ? {
		backgroundColor: generateRandomColor()
	} : {};
};

export default generateDebugStyle;
