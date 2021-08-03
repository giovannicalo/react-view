import { AllHTMLAttributes, JSXElementConstructor, ReactElement } from "react";

interface ViewProps extends AllHTMLAttributes<HTMLElement> {
	element?: keyof JSX.IntrinsicElements | JSXElementConstructor<any>;
}

export default function View(props: ViewProps): ReactElement<any, any>
