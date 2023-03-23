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

import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
	console.log("mobile");
	const [isMobile, setIsMobile] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsMobile(!isMobile);
	};
	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};
	const handleClose = () => {
		setIsMobile(false);
	};

	return (
		<nav className="navbar" style={{ paddingTop: "13%", paddingBottom: "0px" }}>
			<h1
				className="logo"
				style={{
					display: "flex",
					justifyContent: "start",
				}}
			>
				<button
					className="toggle-button"
					style={{
						color: "red",
						border: "none",
						backgroundColor: "transparent",
						paddingRight: "3%",
						width: "30%",
					}}
					onClick={() => {
						handleClick();
						toggleNavbar();
					}}
				>
					{/* <i class="fa-solid fa-bars fs-1" style={{marginLeft:'10px'}}></i> */}
					<img src={bars} alt="" />
				</button>
				<div
					className="logoContainer"
					style={{ display: "flex", justifyContent: "start", width: "70%" }}
				>
					<img src={Logo} alt="" style={{ width: "60%" }} />
				</div>
			</h1>
			<div className={`navbar-menu ${isMobile ? "open" : ""}`}>
				<Link to="/" className="navbar-link" onClick={handleClose}>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 5 } }}
						exit={{ opacity: 0, transition: { duration: 5 } }}
					>
						Home
					</motion.div>
				</Link>
				<Link to="/about" className="navbar-link" onClick={handleClose}>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 5 } }}
						exit={{ opacity: 0, transition: { duration: 5 } }}
					>
						About Us{" "}
					</motion.div>
				</Link>
				<Link to="/history" className="navbar-link" onClick={handleClose}>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 5 } }}
						exit={{ opacity: 0, transition: { duration: 5 } }}
					>
						History
					</motion.div>
				</Link>
				<Link to="/contact" className="navbar-link" onClick={handleClose}>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 5 } }}
						exit={{ opacity: 0, transition: { duration: 5 } }}
					>
						Contact Us
					</motion.div>
				</Link>
				<Link to="/products" className="navbar-link" onClick={handleClose}>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 5 } }}
						exit={{ opacity: 0, transition: { duration: 5 } }}
					>
						Our Products
					</motion.div>
				</Link>
				<Link to="/industries" className="navbar-link" onClick={handleClose}>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 5 } }}
						exit={{ opacity: 0, transition: { duration: 5 } }}
					>
						Industries
					</motion.div>
				</Link>
				<Link to="/build" className="navbar-link" onClick={handleClose}>
					Build Now
				</Link>
				<Link to="/home" className="navbar-link" onClick={handleClose}>
					What We Do
				</Link>
				<div className="navbar-footer">
					<div className="col-md-12">
						<div
							className=" container"
							style={{ display: "flex", justifyContent: "center" }}
						>
							<div className="row iconsContainer">
								<div className="col">
									<img src={facebook} alt="" />
								</div>
								<div className="col">
									<img src={instagram} alt="" />
								</div>
								<div className="col">
									<img src={twitter} alt="" />
								</div>

								<div className="col">
									<img src={Linked} alt="" />
								</div>
							</div>
						</div>
					</div>{" "}
				</div>
				{/* <div className="col-md-12">
                <div className=" container" style={{display:'flex', justifyContent:'center'}} >
<div className="row iconsContainer">
    <div className="col">
        <img src={facebook} alt="" />  

    </div>
    <div className="col">
       
       <img src={instagram} alt="" />  
         </div>
    <div className="col">
    <img src={twitter} alt="" />  

    </div>
  
    <div className="col">
    <img src={Linked} alt="" />  

    </div>
</div>
                </div>
            </div> */}
				<button
					className="close-button"
					style={{ color: "#EC1F26" }}
					onClick={handleClose}
				>
					X
				</button>
			</div>
		</nav>
	);
}
