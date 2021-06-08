import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import LoginPage from "./login";
import MainPage from "./main";
import { Provider } from "react-redux";
import store from "./apis/store";

const HandleInitialState = () => {
	let history = useHistory()
	const handleState = () => {
		const state = store.getState();
		console.log(state);
		if (state.session.isLoggedIn) 
			history.push("/main");
	 	else history.push("/login")
		
	};

	store.subscribe(handleState);
	return(
		<script>handleState</script>
	)
}

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={HandleInitialState}></Route>
					<Route path="/login" component={LoginPage}></Route>
					<Route path="/main" component={MainPage}></Route>
				</Switch>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
