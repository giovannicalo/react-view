import { AllHTMLAttributes, ComponentType, ReactElement } from "react";

interface ViewProps extends AllHTMLAttributes<HTMLElement> {
	element?: keyof JSX.IntrinsicElements | ComponentType;
}

/**
 * A generic React component that renders an HTML element with sensible default styles.
 *
 * @param {ViewProps} props - React props.
 * @param {ComponentType|String} [props.element=div] - The HTML element or React Component to render, defaults to `div`.
 * @returns {ReactElement} A React element.
 */
export default function View(props: ViewProps): ReactElement;
