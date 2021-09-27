import React, { Fragment } from "react";
import Breadcrumb from "./common/breadcrumb";
import {
	Navigation,
	Box,
	MessageSquare,
	Users,
	Briefcase,
	CreditCard,
	ShoppingCart,
	Calendar,
} from "react-feather";
import CountUp from "react-countup";
import { Chart } from "react-google-charts";

import { Bar, Line } from "react-chartjs-2";
import {
	lineOptions,
} from "../constants/chartData";
// image impoer
import {
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	Media,
	Row,
	Table,
} from "reactstrap";

const Dashboard = () => {
	const lineData = {
		labels: ["100", "200", "300", "400", "500", "600", "700", "800"],
		datasets: [
			{
				lagend: "none",
				data: [2.5, 3, 3, 0.9, 1.3, 1.8, 3.8, 1.5],
				borderColor: "#ff8084",
				backgroundColor: "#ff8084",
				borderWidth: 2,
			},
			{
				lagend: "none",
				data: [3.8, 1.8, 4.3, 2.3, 3.6, 2.8, 2.8, 2.8],
				borderColor: "#a5a5a5",
				backgroundColor: "#a5a5a5",
				borderWidth: 2,
			},
		],
	};


	const doughnutOptions = {
		title: "",
		pieHole: 0.35,
		pieSliceBorderColor: "none",
		colors: ["#ff8084", "#13c9ca", "#a5a5a5"],
		legend: {
			position: "none",
		},
		pieSliceText: "none",
		tooltip: {
			trigger: "none",
		},
		animation: {
			startup: true,
			easing: "linear",
			duration: 1500,
		},
		chartArea: { left: 0, top: 10, width: "360px", height: "100%" },
		enableInteractivity: false,
	};
	const pieOptions = {
		title: "",
		pieHole: 1,
		slices: [
			{
				color: "#ff8084",
			},
			{
				color: "#13c9ca",
			},
			{
				color: "#f0b54d",
			},
		],
		tooltip: {
			showColorCode: false,
		},
		chartArea: { left: 0, top: 10, width: "360px", height: "100%" },
		legend: "none",
	};
	return (
		<Fragment>
			<Breadcrumb title="Dashboard" parent="Dashboard" />
			<Container fluid={true}>
				<Row>
					<Col xl="6 xl-100">
						<Card>
							<CardHeader>
								<h5>Colleges in a State</h5>
							</CardHeader>
							<CardBody>
								<div className="market-chart">
									<Bar
										data={lineData}
										options={lineOptions}
										width={778}
										height={308}
									/>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col xl="6 xl-100">
						<Card>
							<CardHeader>
								<h5>College List</h5>
							</CardHeader>
							<CardBody>
								<div className="user-status table-responsive latest-order-table">
									<Table borderless>
										<thead>
											<tr>
												<th scope="col">College ID</th>
												<th scope="col">College Name</th>
												<th scope="col">City</th>
												<th scope="col">State</th>
												<th scope="col">No. of Student</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td className="digits">College1</td>
												<td className="font-danger">City1</td>
												<td className="digits">State1</td>
												<td className="digits">100</td>

											</tr>
										</tbody>
									</Table>
									<a href="#javaScript" className="btn btn-primary">
										View All Colleges
									</a>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col xl="6 xl-100">
						<Card className="height-equal">
							<CardHeader>
								<h5>Students Data</h5>
							</CardHeader>
							<CardBody>
								<div className="user-status table-responsive products-table">
									<table className="table table-bordernone mb-0">
										<thead>
											<tr>
												<th scope="col">Name</th>
												<th scope="col">College</th>
												<th scope="col">Batch</th>
												<th scope="col">Skills</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Student11</td>
												<td className="digits">College1</td>
												<td className="font-primary">2020</td>
												<td className="digits">Java, C++, C#</td>
											</tr>
										</tbody>
									</table>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Statewise Data</h5>
							</CardHeader>
							<CardBody>
								<Row>
									<Col xl="3 xl-50" sm="6">
										<div className="order-graph">
											<h6>Colleges By Location</h6>
											<div className="chart-block chart-vertical-center">
												<Chart
													width={"100%"}
													height={"180px"}
													chartType="PieChart"
													loader={<div>Loading Chart</div>}
													data={[
														["State", "No. of Colleges"],
														["State1",5 ],
														["State2",7],
														["State3", 3],
													]}
													options={doughnutOptions}
													legend_toggle
												/>
											</div>
											<div className="order-graph-bottom">
											<Media>
													<div className="order-color-primary"></div>
													<Media body>
														<h6 className="mb-0">
															State1{" "}
															<span className="pull-right">5</span>
														</h6>
													</Media>
												</Media>
												<Media>
													<div className="order-color-primary"></div>
													<Media body>
														<h6 className="mb-0">
														State2{" "}
															<span className="pull-right">7</span>
														</h6>
													</Media>
												</Media>
												<Media>
													<div className="order-color-primary"></div>
													<Media body>
														<h6 className="mb-0">
														State3{" "}
															<span className="pull-right">3</span>
														</h6>
													</Media>
												</Media>
											</div>
										</div>
									</Col>
									<Col xl="3 xl-50" sm="6">
										<div className="order-graph sm-order-space">
											<h6>Students By Location</h6>
											<div className="peity-chart-dashboard text-center">
												<Chart
													chartType="PieChart"
													data={[
														["State", "No. of Students"],
														["State1",1200 ],
														["State2",1800],
														["State3", 1500],
													]}
													options={pieOptions}
													graph_id="PieChart"
													width={"100%"}
													height={"180px"}
													legend_toggle
												/>
											</div>
											<div className="order-graph-bottom sales-location">
												<Media>
													<div className="order-shape-primary"></div>
													<Media body>
														<h6 className="mb-0 mr-0">
															State1 <span className="pull-right">30%</span>
														</h6>
													</Media>
												</Media>
												<Media>
													<div className="order-shape-primary"></div>
													<Media body>
														<h6 className="mb-0 mr-0">
															State2 <span className="pull-right">37%</span>
														</h6>
													</Media>
												</Media>
												<Media>
													<div className="order-shape-primary"></div>
													<Media body>
														<h6 className="mb-0 mr-0">
															State3 <span className="pull-right">33%</span>
														</h6>
													</Media>
												</Media>
											</div>
										</div>
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

// javascript:void(0)

export default Dashboard;
