import React, { Fragment, useState } from "react";
import {
	AlignLeft,
	MoreHorizontal,
} from "react-feather";

const Header = () => {
	const [sidebar, setSidebar] = useState(true);
	const [rightSidebar, setRightSidebar] = useState(true);
	const [navMenus, setNavMenus] = useState(false);

	const toggle = () => {
		setNavMenus((prevState) => ({
			navMenus: !prevState.navMenus,
		}));
	};

	const openCloseSidebar = () => {
		if (sidebar) {
			setSidebar(false);
			document.querySelector(".page-main-header").classList.add("open");
			document.querySelector(".page-sidebar").classList.add("open");
		} else {
			setSidebar(true);
			document.querySelector(".page-main-header").classList.remove("open");
			document.querySelector(".page-sidebar").classList.remove("open");
		}
	};

	return (
		<Fragment>
			{/* open */}
			<div className="page-main-header ">
				<div className="main-header-right row">
					<div className="main-header-left d-lg-none">
						<div className="logo-wrapper">
							<a href="index.html">
								COMPANY LOGO
							</a>
						</div>
					</div>
					<div className="mobile-sidebar">
						<div className="media-body text-right switch-sm">
							<label className="switch">
								<a href="#javaScript" onClick={openCloseSidebar}>
									<AlignLeft />
								</a>
							</label>
						</div>
					</div>
					<div className="nav-right col">
						<div
							className="d-lg-none mobile-toggle pull-right"
							onClick={() => toggle()}
						>
							<MoreHorizontal />
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Header;
