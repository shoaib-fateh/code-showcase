import React from "react";
import Project from "../project/project";

const ProjectSection = () => (
	<div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5">
		<Project
			src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
			to="https://github.com/shoaib-fateh/herai_rafah_ict"
			title="Herai Rafah ICT"
			description="Herai Rafah ICT is a comprehensive project aimed at integrating information and communication technology (ICT) solutions for Herai Rafah. This repository will serve as a centralized location for all project files, documentation, and development history."
		/>
		<Project
			src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
			to="https://github.com/shoaib-fateh/line-civic-institution"
			title="Line Civic Institution."
			description="Civic empowerment at Line Civic Institution. A non-profit initiative promoting democracy, social justice, and community building. Join us for positive change"
		/>
		<Project
			src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
			to="https://github.com/shoaib-fateh/dark-calculator"
			title="Dark Calculator"
			description="This is an advanced JavaScript calculator with a user-friendly interface, designed to perform basic arithmetic operations. The calculator incorporates features such as history tracking and a respon"
		/>
		<Project
			src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
			to="https://github.com/shoaib-fateh/xylophone"
			title="Xylophone"
			description="A web app featuring a virtual xylophone, allowing users to play musical notes with interactive keys. Implemented in HTML, CSS, and JavaScript. Publicly accessible for creative exploration and"
		/>
	</div>
);

export default ProjectSection;
