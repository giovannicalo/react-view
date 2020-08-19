import React, { forwardRef } from "react";

import Component from "./component";

const View = forwardRef((props, ref) => {
	return <Component {...props} innerRef={ref} />;
});

export default View;
