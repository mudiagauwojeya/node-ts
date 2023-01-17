import { AxiosError, AxiosResponse } from "axios";
import { useRouteError, useNavigate } from "react-router-dom";
import Button from "./Button";

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
	const navigate = useNavigate();
	return (
		<>
			<div className="flex justify-center items-center py-40">
				<div className="flex flex-col justify-center bg-red-200 rounded-lg p-20">
					<h1 className="text-6xl py-20">Oops! Something went wrong!</h1>
					<p className="text-center text-3xl">
						{error.status}-{error.statusText}
					</p>
					<p className="text-red-900 text-center text-xl mx-auto py-7">
						{error.data}
					</p>
					<Button
						className="mx-auto w-80 bg-red-900 text-white p-4 rounded-full hover:bg-red-500"
						onClick={() => navigate(-1)}
					>
						Go Back &lArr;
					</Button>
				</div>
			</div>
		</>
	);
};

export default ErrorPage;
