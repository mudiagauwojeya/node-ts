import axios from "axios";
import { Formik, FormikHelpers, Form, Field } from "formik";
import React from "react";
import Input from "./components/Input";
import FetchApi from "./FetchApi";

type formValues = {
	name: string;
	email: string;
	avatar: string;
};

const App = () => {
	const initialValues: formValues = { name: "", email: "", avatar: "" };
	const submitHandler = async (
		values: formValues,
		_action: FormikHelpers<formValues>
	) => {
		try {
			const r = await fetch("/api/v1/member", {
				method: "post",
				body: JSON.stringify(values),
				headers: {
					"Content-Type": "application/json",
				},
			});
			console.log(r);
		} catch (error) {
			console.error(error, "from log");
		}
	};

	return (
		<>
			<div className="container mx-auto py-20 bg-gray-700 h-full">
				<h1 className="text-5xl pb-10 text-slate-50 text-center">
					Enter Login Details
				</h1>
				<Formik initialValues={initialValues} onSubmit={submitHandler}>
					<Form className="flex flex-col bg-amber-500 rounded justify-between py-24 px-32 mx-auto w-2/4">
						<div>
							<label htmlFor="name">Name</label>
							<Field
								name="name"
								id="name"
								placeholder="John Doe"
								className="bg-gray-50 rounded h-20 w-full pl-4 focus:outline-none focus:bg-gray-200"
							/>
						</div>
						<div className="py-7">
							<label htmlFor="email">Email</label>
							<Field
								name="email"
								id="email"
								placeholder="johndoe@example.com"
								className="bg-gray-50 rounded h-20 w-full pl-4 focus:outline-none focus:bg-gray-200"
							/>
						</div>

						<button
							type="submit"
							className="w-80 bg-gray-700 text-white p-4 rounded-md mx-auto hover:bg-gray-500"
						>
							Go
						</button>
					</Form>
				</Formik>

				<FetchApi />
			</div>
		</>
	);
};
export default App;
