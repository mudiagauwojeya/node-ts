type InputProps = {
	input: string;
} & React.ComponentPropsWithoutRef<"input">;

const Input = ({ input, ...rest }: InputProps) => {
	return <input type={input} {...rest} />;
};
export default Input;
