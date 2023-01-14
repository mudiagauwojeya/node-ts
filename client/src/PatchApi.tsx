import axios from "axios";
import { Formik, FormikHelpers, Form, Field } from "formik";

type formValues = {
	name: string;
	email: string;
};

const PatchApi = () => {
	const initialValues: formValues = { name: "", email: "" };
	const submitHandler = async (
		values: formValues,
		_action: FormikHelpers<formValues>
	) => {
		try {
			const res = await fetch("/members");
			const data = await res.json();

			const reqBody = { ...values, id: data[0].id };

			// update member
			const r = await axios.patch("/api/v1/member", reqBody);
		} catch (error) {
			console.error(error, "from log");
		}
	};

	return (
		<>
			<div className="container mx-auto py-20 bg-gray-700 h-full">
				<h1 className="text-5xl pb-10 text-slate-50 text-center">
					Enter Member Details
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
							Patch
						</button>
					</Form>
				</Formik>
			</div>
		</>
	);
};
export default PatchApi;
