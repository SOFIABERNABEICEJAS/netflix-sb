import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import IndividualView from "./IndividualView";
import { urlBase, apiKey, lenguaje, paginas } from "../auxiliares/auxiliares";
import imagenRota from "../assets/imagenRota.png";
import "../styles/SectionMovieTv.scss";
const Busqueda = () => {
	const params = useParams();

	const [result, setResult] = useState([]);
	useEffect(() => {
		https: fetch(
			`${urlBase}search/movie?${apiKey}&query=${params.nombre}${lenguaje}${paginas}`
		)
			.then((res) => res.json())
			.then((data) => {
				setResult(data.results);
			});
	}, [params.nombre]);
	return (
		<div>
			<div className="conteiner-title">
				<h2>RESULTADO DE BUSQUEDA</h2>
			</div>
			<div className="conteiner-sectionMovieTv">
				<div className="conteiner-cards">
					{result.map((curr) => (
						<Link to={`/movie/${curr.id}/info`} key={curr.id}>
							<IndividualView
								title={curr.title}
								image={
									curr.poster_path
										? `https://image.tmdb.org/t/p/w500/${curr.poster_path}`
										: imagenRota
								}
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Busqueda;
