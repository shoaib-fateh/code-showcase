import React from "react";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faTelegramPlane,
	faLinkedinIn,
	faEnvelope,
} from "@fortawesome/free-brands-svg-icons";

const HomePage = () => (
	<section>
		<div className="flex md:flex-row items-center justify-center p-4">
			<div className="flex-2 px-[30px]">
				<h1 className="text-5xl font-black mb-14">
					Full-stack web and mobile app developer, and amateur
					astronaut.
				</h1>
				<p className="mb-4">
					As a React developer, I have a strong foundation in building
					dynamic and responsive web applications. I enjoy utilizing
					my skills in JavaScript, HTML5, CSS3, and various frameworks
					to create user-friendly interfaces. I am also experienced in
					backend development with Node.js, ensuring that my
					applications are both scalable and secure.
				</p>
				<div className="flex md:flex-row p-4">
					<a
						href="https://github.com/shoaib-fateh"
						className="text-gray-700 hover:text-gray-500 hover:scale-125 transition duration-300 ease-in-out px-1 text-3xl"
					>
						<FontAwesomeIcon icon={faGithub} />
					</a>

					<a
						href="instagram.com/shoaibfateh21"
						className="text-gray-700 hover:text-gray-500 hover:scale-125 transition duration-300 ease-in-out px-1 text-3xl"
					>
						<FontAwesomeIcon icon={faInstagram} />
					</a>

					<a
						href="https://t.me/shoaibfateh21"
						className="text-gray-700 hover:text-gray-500 hover:scale-125 transition duration-300 ease-in-out px-1 text-3xl"
					>
						<FontAwesomeIcon icon={faTelegramPlane} />
					</a>

					<a
						href="https://www.linkedin.com/in/shoaib-fateh/"
						className="text-gray-700 hover:text-gray-500 hover:scale-125 transition duration-300 ease-in-out px-1 text-3xl"
					>
						<FontAwesomeIcon icon={faLinkedinIn} />
					</a>
				</div>
			</div>
			<div className="flex-2 py-[30px]">
				<img src="./homepage.jpg" className="rotate-3 rounded-[50px]" />
			</div>
		</div>
	</section>
);

export default HomePage;
