import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styled from "styled-components";
import "./App.css";

// Import views
import Home from "./components/views/Home";

export default class App extends Component {
	render() {
		return (
			<AppWrapper>
				<Router>
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
					</Switch>
				</Router>
			</AppWrapper>
		)
	}
}

const AppWrapper = styled.div`

`;