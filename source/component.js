import React, { useMemo } from "react";

import generateDebugStyle from "./generate-debug-style";
import Element from "./style";

const Component = ({ children, element, innerRef, style, ...props }) => {
	const debugStyle = useMemo(generateDebugStyle, []);
	return <Element
		{...props}
		as={element}
		ref={innerRef}
		style={{ ...style, ...debugStyle }}
	>
		{children}
	</Element>;
};

export default Component;
