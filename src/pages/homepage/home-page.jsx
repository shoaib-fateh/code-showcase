import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../components/hero-section/hero-section";
import ProjectSection from "../../components/project-section/project-section";
import WorkSection from "../../components/work-section/work-section";

const HomePage = () => (
	<div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
		<Helmet>
			<title>Home - Fateh's Portfolio</title>
			<meta
				name="description"
				content="Welcome to Fateh's portfolio. Explore professional ReactJS and NodeJS projects, web development, and graphic design expertise."
			/>
			<meta
				name="keywords"
				content="Fateh, ReactJS, NodeJS, web development, graphic design, portfolio, freelance developer, front-end development"
			/>
		</Helmet>
		<HeroSection />
		<ProjectSection />
		<WorkSection />
	</div>
);

export default HomePage;
