import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import IndividualView from "./IndividualView";
import { urlBase, apiKey, lenguaje, paginas } from "../auxiliares/variables";
import imagenRota from "../assets/imagenRota.png";
import "../styles/SectionMovieTv.scss";
import useFetchSerch from "../hooks/useFetchSerch";


const Busqueda = () => {
	const { result, isLoading } = useFetchSerch(params.nombre, 1);

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
