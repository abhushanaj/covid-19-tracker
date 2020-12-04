import React from "react";
import {Link} from "react-router-dom";

/* Styling */
import "./navbar.styles.scss";

interface Props{

}

const Navbar:React.FC<Props>=()=>{
	return (
		<nav className="navbar">
			<ul className="navbar__items">
				<li className="navbar__item">
					<Link to="/" className="navbar__link">Home</Link>
				</li>
				<li className="navbar__item">
					<Link to="/tracker" className="navbar__link">Tracker</Link>
				</li>
			</ul>
		</nav>
	)
}


export default Navbar;