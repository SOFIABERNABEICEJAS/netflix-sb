import "../styles/_nav.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

	return (
		<div className="nav">
			<div className="nav-link">
				<ul>
					<li>INICIO</li>
					<li>PELICULAS</li>
					<li>SERIES</li>
				</ul>
			</div>
			<div className="nav-input">
				<form onSubmit={handleSubmit}>
					<input type="text" onChange={handleChange}></input>
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
