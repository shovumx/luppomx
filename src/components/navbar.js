import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {Link} from "gatsby";
import './style.scss';
import './columns.scss';

const Navbar = () => (
<div className="hero-head">
	<div className="columns is-mobile is-marginless heading has-text-weight-bold">
		<div className="column left">
		<Link to="/" className="navbar-item as-text-grey">Luppo</Link>
		</div>
		<div className="column center desktop">
		<p>
		<Link to="/caracteristicas" className="navbar-item has-text-black">Características</Link>
		</p>
		<p>
		<Link to="/blog" className="navbar-item has-text-black">Blog</Link>
		</p>	
		</div>
		<div className="column right">
	<Link to="/contacto" className="navbar-item has-text-grey">Contacto</Link>	
		</div>
	</div>
</div>
);

export default Navbar;
