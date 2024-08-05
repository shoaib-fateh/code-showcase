import React from "react";
import { Link } from "react-router-dom";

const Articles = ({ to, title, description }) => (
	<Link
		to={to}
		className="w-full bg-white dark:bg-gray-800 hover:cursor-pointer"
	>
		<div
			className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
			id="about"
			role="tabpanel"
			aria-labelledby="about-tab"
		>
			<h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h2>
			<p className="mb-3 text-gray-500 dark:text-gray-400">
				{`${description.substring(0, 90)}...`}
			</p>
			<span className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
				Read Article
				<svg
					className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 6 10"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m1 9 4-4-4-4"
					/>
				</svg>
			</span>
		</div>
	</Link>
);

export default Articles;
