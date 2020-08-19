import Enzyme, { mount, shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import React from "react";

import View from "./component";

Enzyme.configure({ adapter: new EnzymeAdapter() });

it("should create a DIV element by default", () => {
	expect(
		mount(<View />).find("div").length
	).toBe(1);
});

it("should create the given DOM element", () => {
	const component = mount(<View as="span" />);
	expect(component.find("div").length).toBe(0);
	expect(component.find("span").length).toBe(1);
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
