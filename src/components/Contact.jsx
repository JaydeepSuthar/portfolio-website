const Contact = () => {
	return (
		<>
			<section id="contact" className="section-2">
				<div className="main-container">
					<h3 style={{ textAlign: "center" }}>Get in Touch</h3>

					<form name="contact" id="contact-form" method="POST">
						{/* for netlify form */}
						<input type="hidden" name="form-name" value="contact" />
						
						<label htmlFor="name">Name</label>
						<input
							type="text"
							className="input-field"
							name="name"
						/>

						<label htmlFor="subject">Subject</label>
						<input
							type="text"
							className="input-field"
							name="subject"
						/>

						<label htmlFor="email">Email</label>
						<input
							type="email"
							className="input-field"
							name="email"
						/>

						<label htmlFor="message">Message</label>
						<textarea className="input-field" name="message" />

						<input id="submit-btn" type="submit" value="Send" />
					</form>
				</div>
			</section>
		</>
	);
};

export default Contact;
