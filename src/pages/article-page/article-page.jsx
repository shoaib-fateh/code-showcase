// ArticlePage.js
import React from "react";
import { useParams } from "react-router-dom";
import { ARTICLES_DATA } from "../../data/ARTICLES_DATA";

const ArticlePage = () => {
	const { articleId } = useParams();
	// Ensure articleId is a string
	const article = ARTICLES_DATA.find((a) => a.title === String(articleId));

	return (
		<div className="container mx-auto p-6 dark:bg-gray-900 py-[100px]">
			{article ? (
				<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
						{article.title}
					</h1>
					<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
						{article.content}
					</p>
				</div>
			) : (
				<div className="bg-red-100 dark:bg-red-800 p-4 rounded-lg shadow-md">
					<p className="text-red-600 dark:text-red-300">
						Article not found
					</p>
				</div>
			)}
		</div>
	);
};

export default ArticlePage;
