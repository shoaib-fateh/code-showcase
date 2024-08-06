import React from "react";
import Section from "../../components/section/section";
import Articles from "../../components/articles/articles";
import DivPad from "../../components/div-pad/div-pad";

const AboutPage = () => (
	<>
		<DivPad />
		<section className="py-10">
			<div className="grid grid-cols-2 gap-6 items-center">
				<div className="col-span-2 items-center md:items-start">
					<Section
						title="Things I’ve made to leave my mark on the world 🌟"
						description="I’m excited about the projects I’ve worked on and am proud of the progress I’ve made. Many of these are open-source and ready for you to explore and contribute to! Feel free to check out the code, suggest improvements, or just drop a comment. Let’s learn and grow together! 🚀✨"
					/>
				</div>
				<div className="flex justify-center"></div>
			</div>
			<Articles />
		</section>
	</>
);

export default AboutPage;
