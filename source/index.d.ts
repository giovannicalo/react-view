import { AllHTMLAttributes, JSXElementConstructor, ReactElement } from "react";

interface ViewProps extends AllHTMLAttributes<HTMLElement> {
	element?: keyof JSX.IntrinsicElements | JSXElementConstructor<any>;
}

/**
 * A generic React component that renders an HTML element with sensible default styles.
 *
 * @param {ViewProps} props - React props.
 * @param {String} [props.element=div] - The HTML element to render, defaults to `div`.
 * @returns {ReactElement} A React element.
 */
export default function View(props: ViewProps): ReactElement<any, any>
