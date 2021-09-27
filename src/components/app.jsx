import React, { useState } from "react";
import Sidebar from "./common/sidebar_components/sidebar";
import Footer from "./common/footer";
import Header from "./common/header_components/header";

const App = (props) => {
	const initialState = {
		ltr: true,
		divName: "RTL",
	};

	const [side, setSide] = useState(initialState);

	return (
		<div>
			<div className="page-wrapper">
				<Header />
				<div className="page-body-wrapper">
					<Sidebar />
					<div className="page-body">{props.children}</div>
					<Footer />
				</div>
			</div>
		</div>
	);
};
export default App;
