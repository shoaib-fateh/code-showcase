import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../components/hero-section/hero-section";
import ProjectSection from "../../components/project-section/project-section";
import WorkSection from "../../components/work-section/work-section";
import DivPad from "../../components/div-pad/div-pad";

const HomePage = () => (
	<>
		<DivPad />
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
	</>
);

export default HomePage;
