import React from "react";
import { Link } from "react-router-dom"; // Ensure this import is at the top

const Footer = () => (
	<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
		<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
			<div className="sm:flex sm:items-center sm:justify-between">
				<Link
					to="/" // Updated to use Link component for routing
					className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
				>
					<img src="./logo.png" className="h-8" alt="Shoaib Fateh Logo" />
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						Shoaib Fateh
					</span>
				</Link>
				<ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
					<li>
						<Link to="/" className="hover:underline me-4 md:me-6">
							Home
						</Link>
					</li>
					<li>
						<Link to="/about" className="hover:underline me-4 md:me-6">
							About
						</Link>
					</li>
					<li>
						<Link to="/projects" className="hover:underline me-4 md:me-6">
							Projects
						</Link>
					</li>
					<li>
						<Link to="/articles" className="hover:underline me-4 md:me-6">
							Articles
						</Link>
					</li>
					<li>
						<Link to="/contact" className="hover:underline">
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
			<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
				© 2024{" "}
				<Link to="/contact" className="hover:underline">
					Shoaib Fateh™
				</Link>
				. All Rights Reserved.
			</span>
		</div>
	</footer>
);

export default Footer;
