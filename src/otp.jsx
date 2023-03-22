import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpInput = () => {
	const navigate = useNavigate();
	const [otp, setOtp] = useState(["", "", "", "", "", ""]);
	const otpKey = "234513";
	let otpString = "";
	const [error, setError] = useState("");

	const handleChange = (event, index) => {
		const value = event.target.value;
		if (isNaN(value)) {
			return;
		}

		const newOtp = [...otp];
		newOtp[index] = value;
		setOtp(newOtp);

		if (value && index < 5) {
			document.getElementById(`otp-${index + 1}`).focus();
		}
	};

	for (let i = 0; i < 6; i++) {
		otpString += otp[i];
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (otpKey === otpString) {
			navigate("/success");
			console.log(otp);
		} else {
			setError("wrong OTP, Please check again");
		}
	}

	return (
		<div className="otp-input">
			<h1>Enter the verification code to continue</h1>
			<h5>We sent to hellouser@headers.design. If you don't see it, check your spam.</h5>
			{otp.map((digit, index) => (
				<input
					className="otp-digit"
					type="text"
					maxLength="1"
					id={`otp-${index}`}
					key={index}
					value={digit}
					onChange={(e) => handleChange(e, index)}
				/>
			))}
			<h4>{error ? error : null}</h4>
			<button className="next-button" type="submit" onClick={handleSubmit}>
				Submit
			</button>
		</div>
	);
};

export default OtpInput;
