import React from "react";

type ButtonProps = {
	children: string;
} & Omit<React.ComponentPropsWithoutRef<"button">, "children">;

const Button = ({ children, ...rest }: ButtonProps) => {
	return <button {...rest}>{children}</button>;
};
export default Button;
