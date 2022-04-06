import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import IndividualView from "./IndividualView";
import { urlBase, apiKey, lenguaje, paginas } from "../auxiliares/variables";
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
						<Link to={`/${curr.id}/info`} key={curr.id}>
							<IndividualView
								title={curr.title}
								image={`https://image.tmdb.org/t/p/w500/${curr.poster_path}`}
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Busqueda;
