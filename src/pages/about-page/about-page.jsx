import React from "react";
import { Helmet } from "react-helmet";
import SocialIcon from "../../components/social-icon/social-icon";
import {
	faGithub,
	faInstagram,
	faTelegramPlane,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Section from "../../components/section/section";
import DivPad from "../../components/div-pad/div-pad";

const ProjectsPage = () => (
	<>
		<DivPad />
		<Helmet>
			<title>Projects - Fateh's Portfolio</title>
			<meta
				name="description"
				content="Discover Fateh's innovative projects in ReactJS, NodeJS, and web development. Explore open-source contributions and more."
			/>
			<meta
				name="keywords"
				content="Fateh, ReactJS projects, NodeJS projects, web development, open-source, programming, freelance"
			/>
		</Helmet>

		<section className="py-10">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
				<div className="flex flex-col items-center md:items-start">
					<Section
						title="Hi👋 I'm Fateh!"
						description="I live in a bustling city, where I explore new horizons and design innovative solutions. Over the years, I've worked on a variety of projects that I’m proud of. Many are open-source and available for you to explore. If you’re interested, please check out the code and feel free to suggest any improvements or enhancements. I believe that collaborating with others is a fantastic way to learn and grow, so I’m always open to new ideas and feedback."
					/>
					<div className="flex justify-center md:justify-start mt-6 space-x-4">
						<SocialIcon
							url="https://github.com/shoaib-fateh"
							icon={faGithub}
						/>
						<SocialIcon
							url="https://instagram.com/shoaibfateh21"
							icon={faInstagram}
						/>
						<SocialIcon
							url="https://t.me/shoaibfateh21"
							icon={faTelegramPlane}
						/>
						<SocialIcon
							url="https://www.linkedin.com/in/shoaib-fateh/"
							icon={faLinkedinIn}
						/>
					</div>
				</div>
				<div className="flex justify-center">
					<img
						src="./about.jpg"
						alt="Fateh"
						className="rounded-[50px] max-w-full h-auto shadow-lg rotate-6"
					/>
				</div>
			</div>
		</section>
	</>
);

export default ProjectsPage;
