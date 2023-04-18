import React, { useEffect } from "react";
import Logo from "../../images/logo.png";
import { useParams } from "react-router-dom";
const image = require("../../Components/Products/4023i/images/image1.jpg");
export default function SubCanon() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const { name } = useParams();

	const tryRequire = (i) => {
		try {
			const image = require(`../../Components/Products/${name}/images/image${i}.jpg`);
			return image;
		} catch (err) {
			console.log(err);
			return null;
		}
	};
	return (
		<>
			<section className="container p-5">
				<div className="col">
					{tryRequire(1) && (
						<div className="row" style={{ padding: "0" }}>
							<img src={tryRequire(1)} alt="" style={{ width: "100%" }} />
						</div>
					)}

					{tryRequire(2) && (
						<div className="row" style={{ padding: "0" }}>
							<img src={tryRequire(2)} alt="" style={{ width: "100%" }} />
						</div>
					)}

					{tryRequire(3) && (
						<div className="row" style={{ padding: "0" }}>
							<img src={tryRequire(3)} alt="" style={{ width: "100%" }} />
						</div>
					)}
					{tryRequire(4) && (
						<div className="row" style={{ padding: "0" }}>
							<img src={tryRequire(4)} alt="" style={{ width: "118%" }} />
						</div>
					)}
				</div>
			</section>
		</>
	);
}
