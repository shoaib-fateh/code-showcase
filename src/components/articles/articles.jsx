import React from "react";
import { Helmet } from "react-helmet";
import Article from "../article/article";
import { ARTICLES_DATA } from "../../data/ARTICLES_DATA";
import { slugify } from "../../utils/slugify";

const Articles = () => (
	<>
		<Helmet>
			<title>Articles - Fateh's Portfolio</title>
			<meta
				name="description"
				content="Explore a collection of articles on programming, design, and development by Fateh. Insights, tips, and discussions on the latest trends and technologies."
			/>
			<meta
				name="keywords"
				content="articles, Fateh, programming, design, development, ReactJS, NodeJS, web development, insights"
			/>
		</Helmet>
		<div className="space-y-8">
			{ARTICLES_DATA.map(({ id, title, content }) => (
				<Article
					key={id}
					to={`/articles/${slugify(title)}`}
					title={title}
					description={content}
				/>
			))}
		</div>
	</>
);

export default Articles;
