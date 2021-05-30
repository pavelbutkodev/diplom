import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import './App.scss';
import {routes} from "./routes";

const App = () => {
	return (
		<Router>
			<Header/>
			<div className='app-wrapper'>
				<Sidebar/>
				<Switch>
					{routes.map((route, index) => (
						<Route
							exact={route.exact}
							key={index}
							path={route.path}
							component={route.component}
						/>
					))}
					<Redirect from="/" to="/templates/" />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
