import React from "react";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import HomePage from "./pages/homepage/home-page";

const App = () => {
	return (
		<div className="container mx-auto">
			<Header />
			<HomePage />
			<Footer />
		</div>
	);
};

export default App;
