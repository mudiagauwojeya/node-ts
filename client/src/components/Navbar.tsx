import { NavLink, NavLinkProps } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="container p-6 bg-slate-400 flex justify-between">
			<ul className="flex">
				<li className="p-6 hover:bg-slate-100 rounded-md">
					<NavLink
						to="/"
						className={({ isActive, isPending }) =>
							isActive ? "active" : isPending ? "pending" : ""
						}
					>
						Home
					</NavLink>
				</li>
				<li className="p-6 hover:bg-slate-100 rounded-md">
					<NavLink to="/profile">Profile</NavLink>
				</li>
				<li className="p-6 hover:bg-slate-100 rounded-md">
					<NavLink to="/users">Users</NavLink>
				</li>
			</ul>
			<ul className="flex">
				<li className="p-6 hover:bg-slate-100 rounded-md">
					<NavLink to="/login">Login</NavLink>
				</li>
				<li className="p-6 hover:bg-slate-100 rounded-md">
					<NavLink to="/logout">Logout</NavLink>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
