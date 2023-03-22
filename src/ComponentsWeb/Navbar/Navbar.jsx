import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";
import "../Navbar/Navbar.css";
import Logo from "../../images/logo.png";
import facebook from "../../images/Group 2.png";
import instagram from "../../images/Group 6.png";
import Linked from "../../images/Group 374.png";
import twitter from "../../images/Group 8.png";
import bars from "../../images/Group 26.png";

export default function Navbar() {
	console.log("web");
	// const [isMobile, setIsMobile] = useState(false);
	// const [isOpen, setIsOpen] = useState(false);

	// const handleClick = () => {
	//   setIsMobile(!isMobile);
	// };
	// const toggleNavbar = () => {
	//   setIsOpen(!isOpen);
	// };
	// const handleClose = () => {
	//   setIsMobile(false);
	// };

	return (
		<nav className="navbar" style={{ display: "block" }}>
			<div
				className="container"
				style={{ marginTop: "2%", marginBottom: "2%", display: "block" }}
			>
				<div
					className="row"
					style={{ justifyContent: "center", display: "flex" }}
				>
					<div
						className="col-md-5"
						style={{ justifyContent: "center", display: "flex" }}
					>
						<img src={Logo} alt="" style={{ width: "50%" }} />
					</div>
					<div
						className="col-md-7"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<div className="container">
							<div className="row">
								<div className="inputContainer">
									<input type="text" className="Inp" placeholder="Search..." />
								</div>
							</div>
							<div className="row p-3">
								<div
									className="container"
									style={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<div
										className="row"
										style={{ display: "flex", justifyContent: "center" }}
									>
										{" "}
										<div
											className="col"
											style={{ padding: "0", margin: "0 0 10px 0" }}
										>
											<img src={facebook} alt="" style={{ margin: "0 20px" }} />
										</div>
										<div
											className="col"
											style={{ padding: "0", margin: "0 0 10px 0" }}
										>
											<img
												src={instagram}
												alt=""
												style={{ margin: "0 20px" }}
											/>
										</div>
										<div
											className="col"
											style={{ padding: "0", margin: "0 0 10px 0" }}
										>
											<img src={twitter} alt="" style={{ margin: "0 20px" }} />
										</div>
										<div
											className="col"
											style={{ padding: "0", margin: "0 0 10px 0" }}
										>
											<img src={Linked} alt="" style={{ margin: "0 20px" }} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section style={{ justifyContent: "center", display: "flex" }}>
				<div className="row">
					<div
						class="navbar navbar-expand-lg navbar-light "
						style={{
							backgroundColor: "rgba(236, 31, 38, 0.14)",
							borderRadius: "77px",
						}}
					>
						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul
								class="navbar-nav mx-auto"
								style={{ marginLeft: "1%", marginRight: "1%" }}
							>
								{" "}
								{/* added mx-auto class to center the items */}
								<li class="nav-item mx-3">
									<Link
										to="/"
										className="navbar-link"
										style={{
											fontSize: "22px",
											lineHeight: "17px",
											fontFamily: "Segoe UI Regular",
										}}
									>
										Home
									</Link>
								</li>{" "}
								{/* added mx-3 class for horizontal margin */}
								<li class="nav-item mx-3">
									<Link
										to="/about"
										className="navbar-link"
										style={{
											fontSize: "22px",
											lineHeight: "17px",
											fontFamily: "Segoe UI Regular",
										}}
									>
										About Us
									</Link>
								</li>
								<li class="nav-item mx-3">
									<Link
										to="/history"
										className="navbar-link"
										style={{
											fontSize: "22px",
											lineHeight: "17px",
											fontFamily: "Segoe UI Regular",
										}}
									>
										History
									</Link>
								</li>
								<li class="nav-item mx-3">
									<Link
										to="/contact"
										className="navbar-link"
										style={{
											fontSize: "22px",
											lineHeight: "17px",
											fontFamily: "Segoe UI Regular",
										}}
									>
										Contact Us
									</Link>
								</li>
								<li class="nav-item mx-3">
									<Link
										to="/products"
										className="navbar-link"
										style={{
											fontSize: "22px",
											lineHeight: "17px",
											fontFamily: "Segoe UI Regular",
										}}
									>
										Our Products
									</Link>
								</li>
								<li class="nav-item mx-3">
									<Link
										to="/industries"
										className="navbar-link"
										style={{
											fontSize: "22px",
											lineHeight: "17px",
											fontFamily: "Segoe UI Regular",
										}}
									>
										Industries
									</Link>
								</li>
								<li class="nav-item mx-3">
									<Link
										to="/build"
										className="navbar-link"
										style={{
											fontSize: "22px",
											lineHeight: "17px",
											fontFamily: "Segoe UI Regular",
										}}
									>
										Build Now
									</Link>
								</li>
								<li class="nav-item mx-3">
									<Link
										to="/home"
										className="navbar-link"
										style={{
											fontSize: "22px",
											lineHeight: "17px",
											fontFamily: "Segoe UI Regular",
										}}
									>
										What We Do
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</nav>
	);
}
