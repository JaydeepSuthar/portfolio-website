const Portfolio = ({ image }) => {
	return (
		<>
			<section id="portfolio" className="section-1">
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
		</>
	);
};

export default Portfolio;
