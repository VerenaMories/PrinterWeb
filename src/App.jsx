import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../src/Atmospheric-rg4aL.ttf";
import "../src/Segoe UI Bold.ttf";
import "../src/Suls22.ttf";
import SubCategory3 from "./Components/Products/SubCategory3";
import SubCategory4 from "./Components/Products/SubCategory4";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import History from "./Components/History/History";
import Contact from "./Components/Contact/Contact";
import Industries from "./Components/Industries/Industries";
import Build from "./Components/Build/Build";
import SubBuild from "./Components/Build/SubBuild";
import Paper from "./Components/Build/Paper";
import Printers from "./Components/Build/Printers";
import SubBuild2 from "./Components/Build/SubBuild2";
import SubProduct from "./Components/Products/SubProduct";
import Canon from "./Components/Products/Canon";
import SubCanon from "./Components/Products/SubCanon";
import SubProduct2 from "./Components/Products/SubProduct2";
import SubProduct3 from "./Components/Products/SubProduct3";
import SubProduct5 from "./Components/Products/SubProduct5";
import SubProduct4 from "./Components/Products/SubProduct4";
import SubProduct6 from "./Components/Products/SubProduct6";
import Products from "./Components/Products/Products";
import Colors from "./Components/Products/Colors";

function App() {
	return window.innerWidth <= 800 ? (
		<>
			<Navbar />
			<AnimatePresence mode="wait">
				<Routes>
					<Route
						path="/"
						element={
							<motion.div
								key="home"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								{" "}
								<Home />
							</motion.div>
						}
					/>
					<Route
						path="/home"
						element={
							<motion.div
								key="home"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								{" "}
								<Home />
							</motion.div>
						}
					/>
					<Route
						path="/about"
						element={
							<motion.div
								key="about"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								{" "}
								<About />
							</motion.div>
						}
					/>
					<Route
						path="/build"
						element={
							<motion.div
								key="build"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								{" "}
								<Build />
							</motion.div>
						}
					/>
					<Route
						path="/colors"
						element={
							<motion.div
								key="colors"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								{" "}
								<Colors />
							</motion.div>
						}
					/>
					<Route
						path="/subBuild"
						element={
							<motion.div
								key="subBuild"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								{" "}
								<SubBuild />
							</motion.div>
						}
					/>
					<Route
						path="/subBuild2"
						element={
							<motion.div
								key="subBuild2"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								{" "}
								<SubBuild2 />
							</motion.div>
						}
					/>
					<Route
						path="/paper"
						element={
							<motion.div
								key="paper"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								{" "}
								<Paper />
							</motion.div>
						}
					/>
					<Route
						path="/printers"
						element={
							<motion.div
								key="printers"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								{" "}
								<Printers />
							</motion.div>
						}
					/>
					<Route
						path="/history"
						element={
							<motion.div
								key="history"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								<History />{" "}
							</motion.div>
						}
					/>

					<Route
						path="/products"
						element={
							<motion.div
								key="products"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								<Products />{" "}
							</motion.div>
						}
					/>

					<Route
						path="/contact"
						element={
							<motion.div
								key="contact"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								<Contact />{" "}
							</motion.div>
						}
					/>

					{/* <Route
						path="/industries"
						element={
							<motion.div
								key="industries"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								<Industries />{" "}
							</motion.div>
						}
					/> */}

					<Route
						path="/products/subProduct"
						element={
							<motion.div
								key="products/subProduct"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								<SubProduct />{" "}
							</motion.div>
						}
					/>

					<Route
						path="/products/subProduct2"
						element={
							<motion.div
								key="products/subProduct2"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								<SubProduct2 />{" "}
							</motion.div>
						}
					/>
					<Route
						path="/subProduct3"
						element={
							<motion.div
								key="subProduct3"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								<SubCategory3 />{" "}
							</motion.div>
						}
					/>

					<Route
						path="/subProduct4"
						element={
							<motion.div
								key="subProduct4"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								<SubCategory4 />{" "}
							</motion.div>
						}
					/>
					<Route
						path="/subProduct5"
						element={
							<motion.div
								key="subProduct5"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								<SubProduct5 />{" "}
							</motion.div>
						}
					/>
					<Route
						path="/subProduct6"
						element={
							<motion.div
								key="subProduct6"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								<SubProduct6 />{" "}
							</motion.div>
						}
					/>

					<Route
						path="/canon"
						element={
							<motion.div
								key="canon"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								<Canon />{" "}
							</motion.div>
						}
					/>

					<Route
						path="/subCanon/:name"
						element={
							<motion.div
								key="subCanon"
								initial={{ opacity: 0, transition: { duration: 2 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 2 } }}
							>
								<SubCanon />{" "}
							</motion.div>
						}
					/>
				</Routes>
			</AnimatePresence>
			<Footer />
		</>
	) : (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/history" element={<History />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/industries" element={<Industries />} />
				<Route path="/products" element={<Products />} />

				<Route path="/build" element={<Build />} />
				<Route path="/subBuild" element={<SubBuild />} />
				<Route path="/paper" element={<Paper />} />
				<Route path="/printers" element={<Printers />} />
				<Route path="/subBuild2" element={<SubBuild2 />} />
				<Route path="/subProduct" element={<SubProduct />} />
				<Route path="/canon" element={<Canon />} />

				<Route path="/colors" element={<Colors />} />

				<Route path="/subCanon/:name" element={<SubCanon />} />
				<Route path="/products/subProduct2" element={<SubProduct2 />} />
				<Route path="/subProduct3" element={<SubProduct3 />} />
				<Route path="/subProduct5" element={<SubProduct5 />} />
				<Route path="/subProduct4" element={<SubProduct4 />} />
				<Route path="/subProduct6" element={<SubProduct6 />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
