import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.scss";
import App from "./components/app";
import PerfectScrollbar from "react-perfect-scrollbar";

// Components
import Dashboard from "./components/dashboard" ;

// Products physical
import College from "./components/colleges/data/college";

//Sales
import Student from "./components/students/student";
import Transactions_sales from "./components/students/transactions-sales";

//Pages
import Media from "./components/media/media";
import Datatable from "./components/common/datatable";

const Root = () => {
	return (
		<BrowserRouter basename={"/"}>
			<PerfectScrollbar>
				<Switch>
					
					<App>
						<Route
							path={`${process.env.PUBLIC_URL}`}
							component={Dashboard}
						/>

						<Route
							path={`${process.env.PUBLIC_URL}/colleges`}
							component={College}
						/>
						
					
						<Route
							path={`${process.env.PUBLIC_URL}/students`}
							component={Student}
						/>
						

						<Route path={`${process.env.PUBLIC_URL}/media`} component={Media} />
						
						
										
						<Route
							path={`${process.env.PUBLIC_URL}/data-table`}
							component={Datatable}
						/>
					</App>
				</Switch>
			</PerfectScrollbar>
		</BrowserRouter>
	);
};

ReactDOM.render(<Root />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
