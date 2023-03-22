import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [error, setError] = useState("");
	const emailKey = "hellouser@headers.design";
	const passKey = "pass1234";

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email === emailKey && pass === passKey) {
			navigate("/otp");
		} else {
			setError("Wrong credentials");
			// message = "Wrong credentials";
		}
		console.log(email);
	};

	return (
		<div className="auth-form-container">
			<h1>Welcome to Systempackage</h1>
			<form className="login-form" onSubmit={handleSubmit}>
				<label htmlFor="email">Email</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="hellouser@headers.design"
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
				<h4>{error ? error : null}</h4>
				<button className="next-button" type="submit">
					Next
				</button>
				<a className="forgot-btn" href="../">
					Forgot your password?
				</a>
			</form>
			<Link to="/register">
				<button className="link-btn">Don't have an account? Register here.</button>
			</Link>
		</div>
	);
};
