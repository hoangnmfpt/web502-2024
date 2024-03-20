import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink className="itemLink" to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className="itemLink" to="/shop">
							San pham HOT
						</NavLink>
					</li>
					<li>
						<NavLink className="itemLink" to="/login">
							Login
						</NavLink>
					</li>
					<li>
						<NavLink className="itemLink" to="/register">
							Register
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
