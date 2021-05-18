import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { shallow } from "enzyme";
import React, { createRef } from "react";

import View from ".";
import Component from "./component";

Enzyme.configure({ adapter: new EnzymeAdapter() });

it("should propagate its ref to the inner component", () => {
	const ref = createRef();
	expect(shallow(
		<View ref={ref} />
	).find(Component).prop("innerRef")).toBe(ref);
});
