import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/homepage/home-page";
import AboutPage from "./pages/about-page/about-page";
import ProjectsPage from "./pages/projects-page/projects-page";
import ArticlesPage from "./pages/articles-page/articles-page";

const App = () => {
	return (
		<Router>
			<div className="container mx-auto">
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/articles" element={<ArticlesPage />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
