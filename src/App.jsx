import image from "./assets/me.jpg";

const App = () => {
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
									<a href="">Contact</a>
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
								style={{ textAlign: "center", lineHeight: "0" }}
							>
								Personalize Theme
							</h5>

							<div id="theme-options-wrapper">
								<div
									id="light-mode"
									className="theme-dot"
								></div>
								<div id="blue-mode" className="theme-dot"></div>
								<div
									id="green-mode"
									className="theme-dot"
								></div>
								<div
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

			<section className="section-2">
				<div className="main-container">
					<div className="about-wrapper">
						<div className="about-me">
							<h4>More About Me</h4>

							<p>
								I Build new project just to tickle my brain and
								love teaching others how to made them
							</p>

							<p>
								While i Keep Busy teaching course, I still take
								interviews in search of great team &amp;
								projects that interest me
							</p>

							<hr />

							<h4>TOP EXPERTISE</h4>

							<p>
								Fullstack devloper with primary focus on Nodejs
								+ React:{" "}
								<a target="_blank" href="">
									Resume
								</a>
							</p>

							<div id="skills">
								<ul>
									<li>Javascript</li>
									<li>Node</li>
									<li>React</li>
									<li>Postgres</li>
									<li>MongoDB</li>
								</ul>
								<ul>
									<li>JS Charts</li>
									<li>AWS (EC2, S3, RDS)</li>
									<li>HTML/CSS</li>
								</ul>
							</div>
						</div>
						<div className="social-links">
							<img
								src={image}
								alt="follow me on social media"
								id="social_img"
							/>

							<h3>Find Me on Social Media</h3>

							<a target="_blank" href="#github" id="github">
								Github: @JaydeepSuthar
							</a>
							<a target="_blank" href="#twitter" id="twitter">
								Twitter: @JaydeepSuthar
							</a>
							<a target="_blank" href="#youtube" id="youtube">
								Youtube: Jaydeep Suthar
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="section-1">
				<div className="main-container">
					<h3 style={{ textAlign: "center" }}>Some of My Projects</h3>

					<div className="post-wrapper">
						<div>
							<div className="post">
								<img className="thumbnail" src={image} />
								<div className="post-preview">
									<h6 className="post-title">Post Title</h6>
									<p className="post-intro">
										this is a demo sentence
									</p>

									<a target="_blank" href="#">
										Read More
									</a>
								</div>
							</div>
						</div>

						<div>
							<div className="post">
								<img className="thumbnail" src={image} />
								<div className="post-preview">
									<h6 className="post-title">Post Title</h6>
									<p className="post-intro">
										this is a demo sentence
									</p>

									<a target="_blank" href="#">
										Read More
									</a>
								</div>
							</div>
						</div>

						<div>
							<div className="post">
								<img className="thumbnail" src={image} />
								<div className="post-preview">
									<h6 className="post-title">Post Title</h6>
									<p className="post-intro">
										this is a demo sentence
									</p>

									<a target="_blank" href="#">
										Read More
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-1">
				<div className="main-container">Contact</div>
			</section>
		</>
	);
};

export default App;
