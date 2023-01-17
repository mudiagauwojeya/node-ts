import { Outlet } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};
export default App;
