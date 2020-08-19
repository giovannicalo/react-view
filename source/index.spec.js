import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
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
