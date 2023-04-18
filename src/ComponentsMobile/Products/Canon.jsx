import React, { useEffect } from "react";
import Logo from "../../images/logo.png";
import "../Home/Home.css";
import i70 from "../../images/70 i.png";
import bw1 from "../../images/canon-blackwhite-1.png";
import canon from "../../images/Canon_logo_vector.png";
import dot from "../../images/Group 549.png";
import { Link } from "react-router-dom";

export default function Canon() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const printers = [
		"4023i",
		"4035i",
		"4045i",
		"4051i",
		"4225i",
		"4235i",
		"4245i",
		"4251i",
		"4525i",
		"4535i",
		"4545i",
		"4551i",
		"DX 527iF",
		"DX 527iFz",
		"DX 617iF",
		"DX 617iFz",
		"DX 717iF",
		"DX 717iFz",
		"DX 4825i",
		"DX 4835i",
		"DX 4845i",
		"DX 6855i",
		"DX 6860i",
		"DX 6870i",
	];
	return (
		<>
			<div className="container">
				<div className="row">
					{/* <div className="col-md-12">
                <div className="imageContainer" >
                    <img src={Logo} alt="" />
                </div>
            </div>   */}
					<div className="col-md-12">
						{printers.map((one) => (
							<div className="col-md-4">
								<Link
									to={`/subCanon/${one}`}
									style={{ textDecoration: "none" }}
								>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											marginTop: "5%",
										}}
									>
										<div
											className="m-3"
											style={{
												backgroundColor: "#fff",
												borderRadius: "15px",
												padding: "3%",
												width: "326px",
												height: "715px",
												boxShadow: "3px 3px 6px 2px rgb(0 0 0 / 30%)",
											}}
										>
											<div
												className="imageContainer"
												style={{
													padding: "0",
													width: "326px",
													height: "312px",
												}}
											>
												<img
													src={require(`../../Components/Products/${one}/main.png`)}
													style={{ maxWidth: "300px", maxHeight: "312px" }}
													alt=""
												/>
											</div>
											<div className="imageContainer" style={{ padding: "0" }}>
												<img src={canon} alt="" />
											</div>

											<p
												style={{
													color: "#707070",
													fontSize: "17px",
													lineHeight: "22px",
													textAlign: "center",
													fontFamily: "Segoe UI Regular",
													marginBottom: "13%",
												}}
											>
												{
													require(`../../Components/Products/${one}/data.js`)
														.data.name
												}
											</p>
											{require(`../../Components/Products/${one}/data.js`).data.details.map(
												(item) => (
													<div
														className="divo"
														style={{
															display: "flex",
															alignItems: "center",
															paddingBottom: "15px",
															paddingLeft: "8px",
														}}
													>
														<img
															src={dot}
															style={{ marginRight: "12px" }}
															alt=""
														/>{" "}
														<p
															style={{
																color: "#707070",
																fontFamily: "Segoe UI Regular",
																fontSize: "16px",
																lineHeight: "15px",
																textAlign: "left",
																marginBottom: "0",
															}}
														>
															{item}
														</p>
													</div>
												)
											)}
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
