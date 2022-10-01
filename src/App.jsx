import { useState } from "react";

import image from "./assets/me.jpg";

import Main from "./components/Main";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

let currentTheme = localStorage.getItem("theme") || "blue";

const App = () => {
	const [theme, setTheme] = useState(currentTheme);

	const changeTheme = (e) => {
		let themeColor = e.target.dataset.mode;

		setTheme(themeColor);
		localStorage.setItem("theme", themeColor);
	};

	return (
		<>
			<main className={`${theme}-theme`}>
				<Main image={image} changeTheme={changeTheme} />

				<About image={image} />

				<Portfolio image={image} />
				
				<Contact />
			</main>
		</>
	);
};

export default App;
