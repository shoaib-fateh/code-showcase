import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Spinner from "./components/spinner/spinner";

const HomePage = lazy(() => import("./pages/homepage/home-page"));
const AboutPage = lazy(() => import("./pages/about-page/about-page"));
const ProjectsPage = lazy(() => import("./pages/projects-page/projects-page"));
const ArticlesPage = lazy(() => import("./pages/articles-page/articles-page"));
const ArticlePage = lazy(() => import("./pages/article-page/article-page"));
const ContactPage = lazy(() => import("./pages/contact-page/contact-page"));
const NotFoundPage  = lazy(() => import("./pages/404-page/404-page"));

const App = () => {
	return (
		<Router>
			<div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
				<Header />
				<Suspense fallback={<Spinner />}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/projects" element={<ProjectsPage />} />
						<Route path="/articles" element={<ArticlesPage />} />
						<Route path="/articles/:articleId" element={<ArticlePage />} />
						<Route path="/contact" element={<ContactPage />} />
						<Route path="*" element={<NotFoundPage  />} />
					</Routes>
				</Suspense>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
