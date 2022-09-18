/* @jest-environment jsdom */ // eslint-disable-line jsdoc/no-bad-blocks

import { render } from "@testing-library/react";
import { createRef } from "react";

import View from ".";

it("should propagate its ref to the inner component", () => {
	const ref = createRef();
	render(<View ref={ref} />);
	expect(ref.current).toBeTruthy();
});

it("should create a DIV element by default", () => {
	expect(render(<View />).container.firstChild.tagName).toBe("DIV");
});

it("should create the given HTML element", () => {
	expect(render(<View element="span" />).container.firstChild.tagName).toBe("SPAN");
});

it("shouldn't have a background color by default", () => {
	expect(render(<View />).container.firstChild.style.backgroundColor).toBeFalsy();
});

it("should have a random background color when the debug flag is set", () => {
	global.debugViews = true;
	expect(render(<View />).container.firstChild.style.backgroundColor).toBeTruthy();
	global.debugViews = false;
});

it("should propagate its props to the inner element", () => {
	expect(render(<View className="foo" />).container.firstChild.className).toContain("foo");
});

it("should render the given children", () => {
	expect(render(<View>
		<span />
	</View>).container.firstChild.firstChild.tagName).toBe("SPAN");
});
