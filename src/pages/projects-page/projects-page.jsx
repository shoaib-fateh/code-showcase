import React from "react";
import Section from "../../components/section/section";
import ProjectSection from "../../components/project-section/project-section";
import { Helmet } from "react-helmet";

const ArticlesPage = () => (
	<div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
		<Helmet>
			<title>Projects - Fateh's Portfolio</title>
			<meta
				name="description"
				content="Explore Fateh's articles on programming, leadership, product design, and more. Insights and ideas from a passionate developer."
			/>
			<meta
				name="keywords"
				content="Fateh, articles, programming, leadership, product design, ReactJS, NodeJS, web development"
			/>
		</Helmet>
		<section className="py-10">
			<div className="grid grid-cols-2 gap-6 items-center">
				<div className="col-span-2 items-center md:items-start">
					<Section
						title="🚀 I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators."
						description="💡 Check out my collection of thoughts on programming, leadership, product design, and more—an evolving journey of ideas and insights."
					/>
				</div>
				<div className="flex justify-center"></div>
			</div>
			<ProjectSection />
		</section>
	</div>
);

export default ArticlesPage;
