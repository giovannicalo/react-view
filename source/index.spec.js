import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { mount, render, shallow } from "enzyme";
import { createRef } from "react";

import View from ".";

Enzyme.configure({ adapter: new EnzymeAdapter() });

it("should propagate its ref to the inner component", () => {
	const ref = createRef();
	mount(<View ref={ref} />);
	expect(ref.current).toBeTruthy();
});

it("should create a DIV element by default", () => {
	expect(render(<View />).is("div")).toBeTruthy();
});

it("should create the given HTML element", () => {
	expect(render(<View element="span" />).is("span")).toBeTruthy();
});

it("shouldn't have a background color by default", () => {
	expect(
		shallow(<View />).prop("style")
	).not.toHaveProperty("backgroundColor");
});

it("should have a random background color when the debug flag is set", () => {
	global.debugViews = true;
	expect(
		shallow(<View />).prop("style")
	).toHaveProperty("backgroundColor");
	global.debugViews = false;
});

it("should propagate its props to the inner element", () => {
	const component = shallow(<View
		className="foo"
		style={{ color: "#000000" }}
	/>);
	expect(component.prop("className")).toBe("foo");
	expect(component.prop("style")).toHaveProperty("color", "#000000");
});

it("should render the given children", () => {
	expect(shallow(<View>
		<span />
	</View>).contains(<span />)).toBeTruthy();
});
