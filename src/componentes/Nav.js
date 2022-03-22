import "../styles/Nav.scss";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
//import Context from "../context/Context";

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
					<input type="text" onChange={handleChange}></input>
					{/* <select onChange={handleChangeIdioma}>
					<option value="es">Español</option>
						<option value="en">Ingles</option>
					</select> */}
				</form>
			</div>

			{/* <Box
				onSubmit={handleSubmit}
				sx={{ display: "flex", alignItems: "flex-end" }}
			>
				<TextField
					onChange={handleChange}
					id="input-with-sx"
					label="Busqueda"
					variant="standard"
				/>
				<SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
			</Box> */}
		</div>
	);
};

export default Nav;
