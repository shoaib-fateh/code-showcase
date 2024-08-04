import React from "react";

const Articles = ({ to, title, description }) => (
	<a href={to} class="w-full bg-white dark:bg-gray-800 hover:cursor-pointer">
		<div
			class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
			id="about"
			role="tabpanel"
			aria-labelledby="about-tab"
		>
			<h2 class="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h2>
			<p class="mb-3 text-gray-500 dark:text-gray-400">
				{`${description.substring(0, 80)}...`}
			</p>
			<a
				href="#"
				class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
			>
				React Article
				<svg
					class=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 6 10"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m1 9 4-4-4-4"
					/>
				</svg>
			</a>
		</div>
	</a>
);

export default Articles;
