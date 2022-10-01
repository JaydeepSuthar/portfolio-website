const About = ({ image }) => {
	return (
		<>
			<section id="about" className="section-2">
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
									<li>NodeJS</li>
									<li>ReactJS</li>
									<li>PostgreSQL</li>
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
							{/* <img
								src={image}
								alt="follow me on social media"
								id="social_img"
							/> */}

							<h3>Find Me on Social Media</h3>

							<a
								target="_blank"
								href="https://github.com/JaydeepSuthar"
								id="github"
							>
								Github: @JaydeepSuthar
							</a>
							{/* <a target="_blank" href="#twitter" id="twitter">
								Twitter: @JaydeepSuthar
							</a>
							<a target="_blank" href="#youtube" id="youtube">
								Youtube: Jaydeep Suthar
							</a> */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
