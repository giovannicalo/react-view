import generateRandomColor from "./generate-random-color";

it("should generate a valid hex color", () => {
	expect(generateRandomColor()).toMatch(/#[0-9A-F]{6}/u);
});
