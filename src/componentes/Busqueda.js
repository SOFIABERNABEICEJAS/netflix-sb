import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import IndividualView from "./IndividualView";
import { urlBase, apiKey, lenguaje, page } from "../auxiliares/auxiliares";

import "../styles/Section.scss";
const Busqueda = () => {
	const params = useParams();

	const [result, setResult] = useState([]);
	useEffect(() => {
		https: fetch(
			`${urlBase}search/tv?${apiKey}&query=${params.nombre}${lenguaje}${page}`
		)
			.then((res) => res.json())
			.then((data) => {
				setResult(data.results);
			});
	}, [params.nombre]);
	return (
		<div className="conteiner-section">
			<div className="conteiner-title">
				<h2>RESULTADO DE BUSQUEDA</h2>
			</div>
			<div className="conteiner-cards">
				{result.map((curr) => (
					<Link to={`/${curr.id}/info`} key={curr.id}>
						<IndividualView
							title={curr.title}
							image={`https://image.tmdb.org/t/p/w500/${curr.poster_path}`}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Busqueda;
