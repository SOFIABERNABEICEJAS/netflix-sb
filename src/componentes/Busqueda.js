import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Busqueda = () => {
	return (
		<div>
			<h2>Busqueda</h2>

			{/*
				const params = useParams();

	const [resultado, setResultado] = useState([]);
	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character?name=${params.nombre}`)
			.then((res) => res.json())
			.then((data) => {
				setResultado(data.results);
			});
	}, []);

			
			
			
			
			
			
			{resultado.map((personaje) => (
				<h3 key={personaje.id}>{personaje.name}</h3>
			))} */}
		</div>
	);
};

export default Busqueda;
