import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<>
			<div className="flex justify-center items-center mx-auto py-40">
				<div className="text-6xl">
					<h1 className="py-20">Oops! Something went wrong!</h1>
					<p className="text-center text-3xl">
						{error.statusText || error.message}
					</p>
				</div>
			</div>
		</>
	);
};

export default ErrorPage;
