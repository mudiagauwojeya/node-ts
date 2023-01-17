const Navbar = () => {
	return (
		<nav className="container p-6 bg-slate-400">
			<ul className="flex">
				<li className="p-6 hover:bg-slate-100 rounded-md">Home</li>
				<li className="p-6 hover:bg-slate-100 rounded-md">Login</li>
				<li className="p-6 hover:bg-slate-100 rounded-md">Logout</li>
				<li className="p-6 hover:bg-slate-100 rounded-md">Profile</li>
				<li className="p-6 hover:bg-slate-100 rounded-md">User</li>
			</ul>
		</nav>
	);
};
export default Navbar;
