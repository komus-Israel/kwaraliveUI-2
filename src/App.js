import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Regularuser from "./pages/Regularuser";
import Businessowner from "./pages/Businessowner";
import Home from "./pages/Home"

function App() {
  return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>
				<Route path='/regularuser'>
					<Regularuser />
				</Route>
				<Route path='/businessuser'>
					<Businessowner />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
