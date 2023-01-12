import axios from "axios";
import useSWR, { Key, Fetcher } from "swr";

type UserType = {
	id: string;
	name: string;
	email: string;
	avatar: string;
};

const fetcher = async (url: string) => {
	const r = await axios(url);
	const d = await r.data;
	return d;
};

const FetchApi = () => {
	const { data, error, isLoading } = useSWR<UserType[], Error>(
		"/api/v1/member",
		fetcher
	);

	if (error) return <h2>Something went wrong</h2>;
	if (isLoading) return <h2>Loading...</h2>;

	return (
		<>
			<h1>Client-side Data fetching</h1>
			<ul>
				{data!.map((d) => (
					<li key={d.id}>
						<h3>{d.name}</h3>
						<h4>{d.email}</h4>
					</li>
				))}
			</ul>
		</>
	);
};

export default FetchApi;
