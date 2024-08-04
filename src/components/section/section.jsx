import React from "react";

const Section = ({ title, description }) => (
	<>
		<h1 className="text-5xl font-bold mb-14">{title}</h1>
		<p className="mb-4">{description}</p>
	</>
);

export default Section;
