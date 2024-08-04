import React from "react";
import SocialIcon from "../../components/social-icon/social-icon";

import {
	faGithub,
	faInstagram,
	faTelegramPlane,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import Section from "../../components/section/section";
import ProjectSection from "../../components/project-section/project-section";

const HomePage = () => (
	<>
		<section>
			<div className="flex md:flex-row items-center justify-center p-4">
				<div className="flex-2 px-[30px]">
					<Section
						title="Full-stack web and mobile app developer, and amateur
					astronaut."
						description="As a React developer, I have a strong foundation in building
					dynamic and responsive web applications. I enjoy utilizing
					my skills in JavaScript, HTML5, CSS3, and various frameworks
					to create user-friendly interfaces. I am also experienced in
					backend development with Node.js, ensuring that my
					applications are both scalable and secure."
					/>
					<div className="flex md:flex-row p-4">
						<SocialIcon
							url="https://github.com/shoaib-fateh"
							icon={faGithub}
						/>

						<SocialIcon
							url="instagram.com/shoaibfateh21"
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
				<div className="flex-2 py-[30px]">
					<img
						src="./homepage.jpg"
						className="rotate-3 rounded-[50px]"
					/>
				</div>
			</div>
		</section>

		<ProjectSection />
	</>
);

export default HomePage;
