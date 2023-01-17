import { AxiosError, AxiosResponse } from "axios";
import { useRouteError } from "react-router-dom";

type ErrorObject = {
	message: string;
	stack: string;
};

type ErrorResponseType = {
	data: string;
	error: ErrorObject;
	internal: boolean;
	status: number;
	statusText: string;
};

const ErrorPage = () => {
	const error = useRouteError() as ErrorResponseType;
	console.error(error.data);
	return (
		<>
			<div className="flex justify-center items-center mx-auto py-40">
				<div className="bg-red-200 rounded-lg p-10">
					<h1 className="text-6xl py-20">Oops! Something went wrong!</h1>
					<p className="text-center text-3xl">
						{error.status}-{error.statusText}
					</p>
					<p className="text-red-900 text-center text-xl mx-auto pt-5">
						{error.data}
					</p>
				</div>
			</div>
		</>
	);
};

export default ErrorPage;
