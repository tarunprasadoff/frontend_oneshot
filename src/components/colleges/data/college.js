import React, { Fragment, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import "react-toastify/dist/ReactToastify.css";
import { data } from "../../../assets/data/category";
import Datatable from "../../common/datatable";
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	Row,
} from "reactstrap";

const College = () => {
	const [open, setOpen] = useState(false);

	
	return (
		<Fragment>
			<Breadcrumb title="Colleges" parent="Data" />
			{/* <!-- Container-fluid starts--> */}
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Colleges</h5>
							</CardHeader>
							<CardBody>
								<div className="clearfix"></div>
								<div id="basicScenario" className="product-physical">
									<Datatable
										myData={data}
										multiSelectOption={false}
										pageSize={10}
										pagination={true}
										class="-striped -highlight"
									/>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
			{/* <!-- Container-fluid Ends--> */}
		</Fragment>
	);
};

export default College;
