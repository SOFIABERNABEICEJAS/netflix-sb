import "../styles/Nav.scss";
import logo from "../assets/logoPeliculasSeries.png";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { mobile } from "../auxiliares/variables";


//estilos del imput buscar 
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
		navigate(`/search/${valorDelInput}`);
	};

	const handleChange = (e) => {
		setValorDelInput(e.target.value);
	};

	return (
		<nav className="nav">
			{!mobile && (
				<div className="nav-link">
					<div className="nav-link-logo">
						<img src={logo} alt="logo de un carrusel de pelicula"></img>
					</div>
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
			)}
			<div className="nav-input">
				<form onSubmit={handleSubmit}>
					<Box sx={{ display: "flex", alignItems: "flex-end" }}>
						<SearchIcon sx={{ mr: 1, my: 2 }} aria-label="icono de lupa" />{" "}
						<CssTextField
							label="Busqueda..."
							onChange={handleChange}
							InputLabelProps={{ style: { color: "white" } }}
						/>
					</Box>
				</form>
			</div>
		</nav>
	);
};

export default Nav;
