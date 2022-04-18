import { forwardRef, useMemo } from "react";

import generateDebugStyle from "./generate-debug-style";
import Element from "./style";

const View = forwardRef(({ children, element, style, ...props }, ref) => {
	const debugStyle = useMemo(generateDebugStyle, []);
	return <Element
		{...props}
		as={element}
		ref={ref}
		style={{ ...style, ...debugStyle }}
	>
		{children}
	</Element>;
});

export default View;
