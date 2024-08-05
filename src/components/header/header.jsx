import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const isActive = (path) => location.pathname === path;
	const normalClass = `text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`;
	const activeClass = `text-blue-700 text-white`;

	return (
		<header className={`px-5 pt-5`}>
			<div
				className={`homepage-logo-container ${
					scrolled
						? "fixed top-[3vh] left-[3vh] z-50 border border-white shadow-md rounded-full transition-all duration-300"
						: "fixed z-[999999] border-none shadow-none rounded-full transition-all duration-300 justify-center align-middle"
				}`}
			>
				<img
					src="./logo.png"
					alt="Logo"
					className={`rounded-full ${
						scrolled ? "w-[43.2px]" : "w-[78.4px]"
					} transition-all duration-300`}
				/>
			</div>
			<nav
				className={`bg-white rounded-full shadow-lg px-10 py-3 mx-auto ${
					scrolled
						? "fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[40px]"
						: "w-fit"
				}`}
			>
				<div
					className="flex items-center justify-center w-full md:flex md:w-auto"
					id="navbar-sticky"
				>
					<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<Link
								to="/"
								className={`block rounded md:bg-transparent ${
									isActive("/") ? activeClass : normalClass
								}`}
								aria-current={
									isActive("/") ? "page" : undefined
								}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/about"
								className={`block rounded md:bg-transparent ${
									isActive("/about")
										? activeClass
										: normalClass
								}`}
								aria-current={
									isActive("/about") ? "page" : undefined
								}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to="/projects"
								className={`block rounded md:bg-transparent ${
									isActive("/projects")
										? activeClass
										: normalClass
								}`}
								aria-current={
									isActive("/projects") ? "page" : undefined
								}
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								to="/articles"
								className={`block rounded md:bg-transparent ${
									isActive("/articles")
										? activeClass
										: normalClass
								}`}
								aria-current={
									isActive("/articles") ? "page" : undefined
								}
							>
								Articles
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								className={`block rounded md:bg-transparent ${
									isActive("/contact")
										? activeClass
										: normalClass
								}`}
								aria-current={
									isActive("/contact") ? "page" : undefined
								}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
