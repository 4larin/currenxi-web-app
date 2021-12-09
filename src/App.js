import "./App.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Getstarted from "./pages/Getstarted";
import Signin from "./pages/Signin"
import Footer from "./Footer/footer";
import Menu from "./components/Menu";

import { useState } from "react";

import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const App = () => {
	const [navToggled, setNavToggled] = useState(false);
	const handleNavToggle = () => {
		setNavToggled(!navToggled);
	};

	return (
		<div>
		
			<Router>
				{/* <Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/ContactUs'>ContactUs</Link> */}

				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/contact-us' element={<ContactUs />} />
					<Route exact path='/get-started' element={<Getstarted />} />
					<Route exact path='/sign-in' element={<Signin />} />
				</Routes>
			</Router>

			
		</div>
	);
};

export default App;
