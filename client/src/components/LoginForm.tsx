import axios from "axios";
import { Formik, FormikHelpers, Form, Field } from "formik";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "../types/hooks";
import { getUser } from "../store/slices/user/userSlice";

type formValues = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const user = useAppSelector((state) => state.user.user);
	const dispatch = useAppDispatch();
	const initialValues: formValues = { email: "", password: "" };
	const submitHandler = async (
		values: formValues,
		_action: FormikHelpers<formValues>
	) => {
		try {
			dispatch(getUser("/api/v1/users"));
		} catch (error) {}
	};

	return (
		<>
			<div className="container mx-auto py-20 h-full">
				<h1 className="text-5xl pb-10 text-slate-50 text-center">
					Welcome, log in to proceed!
				</h1>
				<Formik initialValues={initialValues} onSubmit={submitHandler}>
					<Form className="flex flex-col bg-amber-500 rounded justify-between py-24 px-32 mx-auto w-2/4">
						<div>
							<label htmlFor="email">Email</label>
							<Field
								name="email"
								id="email"
								placeholder="johndoe@example.com"
								className="bg-gray-50 rounded h-20 w-full pl-4 focus:outline-none focus:bg-gray-200"
							/>
						</div>
						<div className="py-7">
							<label htmlFor="name">Password</label>
							<Field
								name="password"
								id="password"
								className="bg-gray-50 rounded h-20 w-full pl-4 focus:outline-none focus:bg-gray-200"
							/>
						</div>
						<Button
							type="submit"
							className="w-80 bg-gray-700 text-white p-4 rounded-lg mx-auto hover:bg-gray-500"
						>
							Login
						</Button>
					</Form>
				</Formik>
			</div>
		</>
	);
};
export default LoginForm;
