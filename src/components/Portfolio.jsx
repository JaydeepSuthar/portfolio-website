import beap from "../assets/beap.png";

const works = [
	{
		name: "Be a Programmer",
		image: beap,
		description: `Be A Programmer is all-in-one solution for all the people who want to learn to code or improve their coding skill`,
		links: [
			{
				label: "Frontend",
				link: "https://github.com/JaydeepSuthar/be-a-programmer-frontend",
			},
			{
				label: "Backend",
				link: "https://github.com/JaydeepSuthar/be-a-programmer-backend",
			},
		],
	},
];

const Portfolio = () => {
	return (
		<>
			<section id="portfolio" className="section-1">
				<div className="main-container">
					<h3 style={{ textAlign: "center" }}>Some of My Projects</h3>

					<div className="post-wrapper">
						<div className="post">
							{works.map((work, idx) => (
								<>
									<div>
										<div className="post-preview">
											<img
												className="thumbnail"
												src={work.image}
											/>
											<h6 className="post-title">
												{work.name}
											</h6>
											<p className="post-intro">
												{work.description}
											</p>

											<div className="portfolio-link-wrapper">
												{work.links.map((link) => (
													<a
														target="_blank"
														href={link.link}
													>
														{link.label}
													</a>
												))}
											</div>
										</div>
									</div>
								</>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Portfolio;
