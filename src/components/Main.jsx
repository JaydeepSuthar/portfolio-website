const Main = ({ image, changeTheme }) => {
	return (
		<>
			<section className="section-1">
				<div className="main-container">
					<div className="greeting-wrapper">
						<h1>Hi, I'm Jaydeep Suthar</h1>
					</div>

					<div className="intro-wrapper">
						<div className="nav-wrapper">
							<div className="dots-wrapper">
								<div id="dot-1" className="browser-dot"></div>
								<div id="dot-2" className="browser-dot"></div>
								<div id="dot-3" className="browser-dot"></div>
							</div>
							<ul id="navigation">
								<li>
									<a href="#contact">Contact</a>
								</li>
								<li>
									<a href="#about">About</a>
								</li>
								<li>
									<a href="#portfolio">Portfolio</a>
								</li>
							</ul>
						</div>
						<div className="left-column">
							<img
								id="profile_pic"
								src={image}
								alt="Profile Image"
							/>
							<h5
								style={{
									textAlign: "center",
									lineHeight: "0",
								}}
							>
								Personalize Theme
							</h5>

							<div id="theme-options-wrapper">
								<div
									onClick={changeTheme}
									data-mode="light"
									id="light-mode"
									className="theme-dot"
								></div>
								<div
									onClick={changeTheme}
									data-mode="blue"
									id="blue-mode"
									className="theme-dot"
								></div>
								<div
									onClick={changeTheme}
									data-mode="green"
									id="green-mode"
									className="theme-dot"
								></div>
								<div
									onClick={changeTheme}
									data-mode="purple"
									id="purple-mode"
									className="theme-dot"
								></div>
							</div>

							<p id="setting-note">
								*Theme settings will be saved for <br />
								your next visit
							</p>
						</div>

						<div className="right-column">
							<div id="preview-shadow">
								<div id="preview">
									<div
										id="corner-tl"
										className="corner"
									></div>
									<div
										id="corner-tr"
										className="corner"
									></div>

									<h3>What I Do</h3>
									<p>
										I am helping business to automate their
										work
									</p>

									<div
										id="corner-bl"
										className="corner"
									></div>
									<div
										id="corner-br"
										className="corner"
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Main;
