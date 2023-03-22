import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [name, setName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/otp");
		console.log(email);
	};

	return (
		<div className="auth-form-container">
			<h1>Welcome to Systempackage</h1>
			<form className="register-form" onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="name"
					placeholder="full name"
					id="name"
					name="name"
					required
				/>
				<label htmlFor="email">Email</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="youremail@gmail.com"
					id="email"
					name="email"
					required
				/>
				<label htmlFor="password">Password</label>
				<input
					value={pass}
					onChange={(e) => setPass(e.target.value)}
					type="password"
					placeholder="********"
					id="password"
					name="password"
					required
				/>
				<button className="next-button" type="submit">
					Next
				</button>
			</form>
			<Link to="/">
				<button className="link-btn">Already have an account? Login here.</button>
			</Link>
		</div>
	);
};
