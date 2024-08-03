import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcon = ({ link, icon }) => (
	<a
		href={link}
		className="text-gray-700 hover:text-gray-500 hover:scale-125 transition duration-300 ease-in-out px-1 text-3xl"
	>
		<FontAwesomeIcon icon={icon} />
	</a>
);

export default SocialIcon;
