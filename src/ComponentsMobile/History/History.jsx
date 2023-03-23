import React, { useEffect } from "react";
import Logo from "../../images/logo.png";
import "../Home/Home.css";
export default function History() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className="container History">
				<div className="row">
					{/* <div className="col-md-12">
                <div className="imageContainer" >
                    <img src={Logo} alt="" />
                </div>
            </div>   */}
					<div className="col-md-12">
						<div className="container">
							<div
								class="row"
								style={{ display: "flex", justifyContent: "center" }}
							>
								<p
									style={{
										color: "#EC1F26",
										fontSize: "21px",
										lineHeight: "28px",
										textAlign: "center",
										fontFamily: "a Atmospheric",
										marginTop: "3%",
									}}
								>
									our history
								</p>
							</div>
							<div
								class="row"
								style={{ display: "flex", justifyContent: "center" }}
							>
								<p
									style={{
										color: "#707070",
										fontSize: "18px",
										lineHeight: "24px",
										textAlign: "center",
										fontFamily: "Segoe UI Regular",
										width: "337px",
									}}
								>
									It all started in 1996; after several years of speciallizing
									in service business for existing clinets who owned their own
									equipment, we saw the need for a company that provides high
									quality products and services. So in 2001 we founded our first
									company in Africa Egypt which is still in business and
									growing, where we sell and lease Canon equipment. In 2013 we
									opend another branch of our company in California with the
									same name of our older sister comany in Africa Egypt "Advanced
									Business Systems" for the purpose of selling our Canon
									products and offering our services for our dedicated
									customers. Now we decided to focus on providing integerated
									business technology and services to serve clients in
									california whose businesses are local, national, and
									international in scope.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
