import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";
import Articles from "../articles/articles";

const WorkSection = () => (
	<div className="flex flex-col md:flex-row gap-4 py-20">
		<div className="flex flex-col gap-4 pr-10">
			<Articles />
		</div>
		<div>
			<div>
				<FontAwesomeIcon
					icon={faBagShopping}
					className="text-gray-900 text-xl"
				/>
				<span className="px-2 text-gray-900 font-bold">Work</span>
			</div>

			<Work
				src="./facebook.png"
				title="Facebook"
				job="Software Engineer"
			/>

			<Work src="./twitter.png" title="Twitter" job="Software Engineer" />
		</div>
	</div>
);

export default WorkSection;

const Work = ({ src, title, job }) => (
	<div className="py-5 flex">
		<img src={src} alt="facebook" className="w-12 rounded-full mr-5" />

		<div className="flex-grow text-gray-700">
			<h1 className="font-bold">{title}</h1>
			<span>{job}</span>
		</div>
	</div>
);
