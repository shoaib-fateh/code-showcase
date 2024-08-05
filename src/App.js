import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/homepage/home-page";
import AboutPage from "./pages/about-page/about-page";
import ProjectsPage from "./pages/projects-page/projects-page";
import ArticlesPage from "./pages/articles-page/articles-page";
import ArticlePage from "./pages/article-page/article-page";
import ContactPage from "./pages/contact-page/contact-page";
import _404Page from "./pages/404-page/404-page";

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
					<Route
						path="/articles/:articleId"
						element={<ArticlePage />}
					/>
					<Route path="/contact" element={<ContactPage />} />
					<Route path="*" element={<_404Page />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
