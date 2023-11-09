import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Fouter from './Fouter';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Fouter />
		</>
	);
};

export default Layout;
