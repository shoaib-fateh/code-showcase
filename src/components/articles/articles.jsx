// Articles.js
import React from "react";
import Article from "../article/article";
import { ARTICLES_DATA } from "../../data/ARTICLES_DATA";
import { slugify } from "../../utils/slugify";

const Articles = () => (
	<>
		{ARTICLES_DATA.map(({ id, title, content }) => (
			<Article
				key={id}
				to={`/articles/${slugify(title)}`}
				title={title}
				description={content}
			/>
		))}
	</>
);

export default Articles;
