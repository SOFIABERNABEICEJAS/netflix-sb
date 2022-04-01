import "../styles/Nav.scss";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
	"& label.Mui-focused": {
		color: "white",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "white",
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "darkgrey",
		},
		"&:hover fieldset": {
			borderColor: "white",
		},
		"&.Mui-focused fieldset": {
			borderColor: "white",
		},
		"&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
			color: "white",
		},
	},
});

const Nav = () => {
	const navigate = useNavigate();
	const [valorDelInput, setValorDelInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/busqueda/${valorDelInput}`);
	};

	const handleChange = (e) => {
		setValorDelInput(e.target.value);
	};
	//const handleChangeIdioma = (e) => {
	//	context.setLanguage(e.target.value);
	//};

	return (
		<div className="nav">
			<div className="nav-link">
				<ul>
					<Link to="/">
						<li>INICIO</li>
					</Link>

					<Link to="/movie">
						<li>PELICULAS</li>
					</Link>
					<Link to="/tv">
						<li>SERIES</li>
					</Link>
				</ul>
			</div>
			<div className="nav-input">
				<form onSubmit={handleSubmit}>
					<Box sx={{ display: "flex", alignItems: "flex-end" }}>
						<SearchIcon sx={{ mr: 1, my: 2 }} />{" "}
						<CssTextField
							label="Busqueda..."
							onChange={handleChange}
							InputLabelProps={{ style: { color: "white" } }}
						/>
					</Box>
				</form>
			</div>
		</div>
	);
};

export default Nav;
