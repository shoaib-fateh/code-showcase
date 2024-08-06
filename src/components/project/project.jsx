import React from "react";

const Project = ({ to, src, title, description }) => (
	<a
		href={to}
		class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer"
		target="_blank"
	>
		<img src={src} width="" height="" className="w-10 mb-3" />
		<a href={to}>
			<h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
		</a>
		<p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
			{`${description.substring(0, 80)}...`}
		</p>
		<a
			href={to}
			class="inline-flex font-medium items-center text-blue-600 hover:underline"
		>
			See on github
			<svg
				class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 18 18"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
				/>
			</svg>
		</a>
	</a>
);

export default Project;
