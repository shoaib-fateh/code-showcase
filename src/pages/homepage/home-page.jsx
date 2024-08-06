import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../components/hero-section/hero-section";
import ProjectSection from "../../components/project-section/project-section";
import WorkSection from "../../components/work-section/work-section";
import DivPad from "../../components/div-pad/div-pad";
import Logo from "../../components/logo/logo";
import { debounce } from "lodash";

const HomePage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(120);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = debounce(() => {
			let scroll = Math.round(window.pageYOffset, 2);
			let newLogoSize = 120 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		}, 50);

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const logoClass = `ml-5 ${
		stayLogo
			? "fixed top-3 z-50 border border-white rounded-full shadow-lg"
			: "relative"
	}`;

	return (
		<>
			<DivPad />
			<Helmet>
				<title>Home - Fateh's Portfolio</title>
				<meta
					name="description"
					content="Welcome to Fateh's portfolio. Explore professional ReactJS and NodeJS projects, web development, and graphic design expertise."
				/>
				<meta
					name="keywords"
					content="Fateh, ReactJS, NodeJS, web development, graphic design, portfolio, freelance developer, front-end development"
				/>
			</Helmet>
			<div className={logoClass}>
				<Logo width={logoSize} link={false} />
			</div>
			<div className="pb-10" />
			<HeroSection />
			<ProjectSection />
			<WorkSection />
		</>
	);
};

export default HomePage;
