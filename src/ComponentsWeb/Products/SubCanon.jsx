import React, { useEffect } from "react";
import Logo from "../../images/logo.png";
import { useParams } from "react-router-dom";
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
			<section className="container p-5" style={{ height: "100vh" }}>
				<div className="row">
					{tryRequire(1) && (
						<div className="col" style={{ padding: "0" }}>
							<img src={tryRequire(1)} alt="" style={{ maxHeight: "430px" }} />
						</div>
					)}

					{tryRequire(2) && (
						<div className="col" style={{ padding: "0" }}>
							<img src={tryRequire(2)} alt="" style={{ maxHeight: "430px" }} />
						</div>
					)}

					{tryRequire(3) && (
						<div className="col" style={{ padding: "0" }}>
							<img src={tryRequire(3)} alt="" style={{ maxHeight: "430px" }} />
						</div>
					)}
					{tryRequire(4) && (
						<div className="col" style={{ padding: "0" }}>
							<img src={tryRequire(4)} alt="" style={{ maxHeight: "430px" }} />
						</div>
					)}
				</div>
			</section>
		</>
	);
}
