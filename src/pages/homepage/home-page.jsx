import React from "react";

import HeroSection from "../../components/hero-section/hero-section";
import ProjectSection from "../../components/project-section/project-section";
import WorkSection from "../../components/work-section/work-section";

const HomePage = () => (
	<div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
		<HeroSection />
		<ProjectSection />
		<WorkSection />
	</div>
);

export default HomePage;
