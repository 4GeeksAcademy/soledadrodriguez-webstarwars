import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../img/Star-Wars-Logo-PNG-HD-Outline.png"
export const Navbar = () => {
	return (
		<nav className="nav ">
			<div className="container-fluid ">
				<img
					className="ms-5"
					width="50"
					height="50"
					src="https://img.icons8.com/ios/100/star-wars.png"
					alt="star-wars"
				/>

						<button className="btn btn-primary dropdown-toggle float-end mt-3" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Favourites</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#"></a></li>
						</ul>

			</div>
		</nav>
	);
};
