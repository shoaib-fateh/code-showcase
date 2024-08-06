import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage  = () => (
	<div className="flex flex-col items-center justify-center min-h-screen text-gray-800 p-8">
		<div className="p-8 text-center">
			<h1 className="text-5xl font-extrabold text-dodgerblue mb-4">
				Oh no... 😓
			</h1>
			<p className="text-lg font-bold text-gray-700 mb-8">
				Looks like this page is missing or you’re not allowed to see it.
				What if...
			</p>
			<ul className="list-none text-gray-600 mb-8">
				<li className="mb-2">
					...we're living in a cosmic video game and this page is just
					a lost level?
				</li>
				<li className="mb-2">
					...cats are secretly in charge and using this error to
					distract us from the truth?
				</li>
				<li className="mb-2">
					...this 404 page is a secret society for those who love
					getting lost on the internet?
				</li>
				<li className="mb-2">
					...you’ve accidentally discovered the intergalactic
					internet’s VIP lounge?
				</li>
				<li className="mb-2">
					...the page you’re looking for took a vacation to the
					digital Bahamas?
				</li>
				<li className="mb-2">
					...the link you clicked is a time machine and it's just
					taking a bit longer to load?
				</li>
			</ul>
			<Link
				to="/"
				className="inline-block px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
			>
				Back to Home
			</Link>
		</div>
	</div>
);

export default NotFoundPage ;
