import "./App.css";
import { Login } from "./login";
import { Register } from "./register";
import { Success } from "./success";
import OtpPage from "./otp";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Login />} />
			</Routes>
			<Routes>
				<Route path="/register" element={<Register />} />
			</Routes>
			<Routes>
				<Route path="/otp" element={<OtpPage />} />
			</Routes>
			<Routes>
				<Route path="/success" element={<Success />} />
			</Routes>
		</div>
	);
}

export default App;
