import "../styles/Nav.scss";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

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
						<SearchIcon sx={{ mr: 1, my: 0.5 }} />
						<TextField
							label="Busqueda"
							onChange={handleChange}
							variant="standard"
						/>
					</Box>
				</form>
			</div>
		</div>
	);
};

export default Nav;
