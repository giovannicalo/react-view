/* global window */

import generateDebugStyle from "./generate-debug-style";

it("should generate an empty object by default", () => {
	expect(generateDebugStyle()).toMatchObject({});
});

it("should generate a valid style object when the debug flag is set", () => {
	window.debugViews = true;
	expect(generateDebugStyle()).toMatchObject({
		backgroundColor: expect.stringMatching(/#[0-9A-F]{6}/u)
	});
	window.debugViews = false;
});
