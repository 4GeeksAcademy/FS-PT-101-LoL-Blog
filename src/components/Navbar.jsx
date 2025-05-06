import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

const {store, dispatch} = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
				<img className="logoHome" src="src/assets/img/logo.png"></img>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
					<button className="btn dropdownButton dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    				Favorites
  					</button>
  					<ul className="dropdown-menu">
  					</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};