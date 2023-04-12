import React, { useEffect } from "react";
import "../Contact/Contact.css";
import c2451377 from "../../images/2451377.jpg";
export default function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<section>
				<div className="container" style={{ marginTop: "1%" }}>
					<p
						style={{
							color: "#EC1F26",
							fontSize: "46px",
							lineHeight: "40px",
							textAlign: "center",
							fontFamily: "a Atmospheric",
							marginTop: "3%",
						}}
					>
						Contact Us{" "}
					</p>

					<div className="row">
						<div
							className="col-md-12 "
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<div
								style={{
									backgroundColor: "rgba(109, 107, 107, 0.33)",
									borderRadius: "74px",
									width: "1721px",
									height: "555px",
									boxShadow: "3px 3px 6px 2px rgb(0 0 0 / 30%)",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<div className="divShadow container p-3">
									<p
										style={{
											color: "#EC1F26",
											fontSize: "30px",
											fontFamily: "a Atmospheric",
											textAlign: "center",
										}}
									>
										Feel Free To Reach Out!
									</p>
									<h3
										style={{
											fontFamily: "Segoe UI Regular",
											fontSize: "30px",
											textAlign: "center",
											color: "#707070",
										}}
									>
										Connect with us. Get in touch for support, feedback or just
										to say hello. We're here to help you succeed.
									</h3>
									<div className="row">
										<div className="col">
											<div
												className="m-4"
												style={{
													backgroundColor: "#fff",
													borderRadius: "15px",
													padding: "3%",
													boxShadow: "3px 3px 6px 2px rgb(0 0 0 / 30%)",
													width: "297px",
													height: "180px",
												}}
											>
												<div
													style={{ display: "flex", justifyContent: "center" }}
												>
													<div
														class="item-icon"
														style={{
															backgroundColor: "#EC1F26",
															fontSize: "28px",
															borderRadius: "50%",
															color: "#fff",
															padding: ".5em",
															width: "65px",
															height: "65px",
														}}
													>
														<i
															class="fa-solid fa-location-dot"
															style={{ paddingLeft: "8px" }}
														></i>{" "}
													</div>
												</div>

												{/* <i class="fa-solid fa-location-dot"></i> */}
												<p
													style={{
														color: "#EC1F26",
														fontSize: "21px",
														lineHeight: "28px",
														textAlign: "center",
														fontFamily: "a Atmospheric",
														paddingTop: "4%",
														marginBottom: "0px",
													}}
												>
													Office Address:
												</p>
												<p
													style={{
														color: "#6F6F6F",
														fontSize: "17px",
														lineHeight: "20px",
														textAlign: "center",
													}}
												>
													6153 Stonehaven Ct. Cypress CA, 90630
												</p>
											</div>
										</div>
										<div className="col">
											<div
												className="m-4"
												style={{
													backgroundColor: "#fff",
													borderRadius: "15px",
													padding: "3%",
													boxShadow: "3px 3px 6px 2px rgb(0 0 0 / 30%)",
													width: "297px",
													height: "180px",
												}}
											>
												<div
													style={{ display: "flex", justifyContent: "center" }}
												>
													<div
														class="item-icon"
														style={{
															backgroundColor: "#EC1F26",
															fontSize: "28px",
															borderRadius: "50%",
															color: "#fff",
															padding: ".5em",
															width: "65px",
															height: "65px",
														}}
													>
														<i
															class="fa-solid fa-phone-volume"
															style={{ paddingLeft: "4px" }}
														></i>
													</div>
												</div>
												<p
													style={{
														color: "#EC1F26",
														fontSize: "21px",
														lineHeight: "28px",
														textAlign: "center",
														fontFamily: "a Atmospheric",
														paddingTop: "4%",
														marginBottom: "0px",
													}}
												>
													Give Us A Call
												</p>
												<p
													style={{
														color: "#6F6F6F",
														fontSize: "17px",
														lineHeight: "20px",
														textAlign: "center",
													}}
												>
													Mobile-no: +1 714 220 7112
												</p>
											</div>
										</div>
										<div className="col">
											<div
												className="m-4"
												style={{
													backgroundColor: "#fff",
													borderRadius: "15px",
													padding: "3%",
													boxShadow: "3px 3px 6px 2px rgb(0 0 0 / 30%)",
													width: "297px",
													height: "180px",
												}}
											>
												<div
													style={{ display: "flex", justifyContent: "center" }}
												>
													<div
														class="item-icon"
														style={{
															backgroundColor: "#EC1F26",
															fontSize: "28px",
															borderRadius: "50%",
															color: "#fff",
															padding: ".5em",
															width: "65px",
															height: "65px",
														}}
													>
														<i
															class="fa-solid fa-envelope-open-text"
															style={{ paddingLeft: "4px" }}
														></i>
													</div>
												</div>
												<p
													style={{
														color: "#EC1F26",
														fontSize: "21px",
														lineHeight: "28px",
														textAlign: "center",
														fontFamily: "a Atmospheric",
														paddingTop: "4%",
														marginBottom: "0px",
													}}
												>
													Email Address:{" "}
												</p>
												<p
													style={{
														color: "#6F6F6F",
														fontSize: "17px",
														lineHeight: "20px",
														textAlign: "center",
													}}
												>
													info@aircopier.com
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-12 ">
							<div
								className="divContainer"
								style={{ marginTop: "6%", marginBottom: "6%" }}
							>
								<div className="divShadow container p-3">
									<p
										style={{
											color: "#EC1F26",
											fontSize: "30px",
											fontFamily: "a Atmospheric",
											marginTop: "2%",
											textAlign: "center",
										}}
									>
										Get in Touch With Us!
									</p>

									<div
										className="m-3"
										style={{
											backgroundColor: "#fff",
											borderRadius: "15px",
											padding: "3%",
											boxShadow: "3px 3px 6px 2px rgb(0 0 0 / 30%)",
										}}
									>
										<div className="row">
											<div
												className="col"
												style={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<img src={c2451377} alt="" style={{ width: "100%" }} />
											</div>
											<div className="col">
												{/* <h3 class="title">Get in Touch <span>With Us</span></h3> */}

												<div class="form-wrapper">
													<form id="contact-form">
														<div class="single-form">
															<input
																type="text"
																name="name"
																placeholder="Name"
															/>
														</div>

														<div class="single-form">
															<input
																type="email"
																name="email"
																placeholder="Email"
															/>
														</div>

														<div class="single-form">
															<input
																type="text"
																name="subject"
																placeholder="Subject"
															/>
														</div>

														<div class="single-form">
															<textarea
																name="message"
																placeholder="Message"
															></textarea>
														</div>
														<p class="form-message"></p>
														<div class="single-form">
															<button class="btn btn-danger btn-hover-dark w-100">
																Send Message{" "}
															</button>
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
