import React from "react";
import { Helmet } from "react-helmet";
import Section from "../../components/section/section";
import DivPad from "../../components/div-pad/div-pad";

const ContactPage = () => (
	<>
		<DivPad />
		<Helmet>
			<title>Contact - Fateh's Portfolio</title>
			<meta
				name="description"
				content="Get in touch with Fateh. Find ways to contact, including email and social media, for feedback, questions, or suggestions."
			/>
			<meta
				name="keywords"
				content="Fateh, contact, email, social media, feedback, questions, suggestions, ReactJS, NodeJS, web development"
			/>
		</Helmet>
		<section className="py-10">
			<div className="grid grid-cols-2 gap-6 items-center">
				<div className="col-span-2 items-center md:items-start">
					<Section
						title="Let’s Get in Touch: Ways to Connect with Me"
						description="Thank you for your interest in reaching out! I’m excited to hear from you and welcome any feedback, questions, or suggestions you may have. 😊"
					/>
					<p>
						If you have a specific question or comment, please feel
						free to email me directly at{" "}
						<a
							href="mailto:shoaibfateh21@yahoo.com"
							className="text-blue-500 hover:underline"
						>
							shoaibfateh21@yahoo.com
						</a>
						. I strive to respond to all messages within 24 hours,
						though it may take a bit longer during busy periods. You
						can also reach me through the contact form on my
						website. Simply fill out the required fields, and I'll
						get back to you as soon as possible. For updates and to
						connect with me on social media, follow me on Instagram.
						I post regular updates and engage with my followers
						there, so don’t hesitate to reach out. Thanks again for
						your interest, and I look forward to hearing from you!
					</p>
				</div>
				<div className="flex justify-center"></div>
			</div>
		</section>
	</>
);

export default ContactPage;
