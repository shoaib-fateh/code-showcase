import React from "react";
import Articles from "../articles/articles";

const WorkSection = () => (
	<div className="flex flex-col md:flex-row gap-4 py-20 px-5">
		<div className="flex flex-col gap-4 pr-10">
			<Articles
				to="#"
				title="The Benefits of Cloud Computing"
				description="Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud."
			/>

			<Articles
				to="#"
				title="Artificial Intelligence in Healthcare"
				description="AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology."
			/>
		</div>
		<div></div>
	</div>
);

export default WorkSection;
