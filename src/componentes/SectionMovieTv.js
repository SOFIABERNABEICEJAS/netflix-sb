import React from "react";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingCircular from "./LoadingCircular";

import "../styles/SectionMovieTv.scss";
import useFetchGeneral from "../hooks/UseFetchGeneral";
import IndividualView from "./IndividualView";

import Pagination from "@mui/material/Pagination";

// Si agrego aca el week se rompe peliculasy series pero se arregla home

const SectionMovieTv = () => {
	const params = useParams();
	const [page, setPage] = useState(1);
	const { result, isLoading, totalPages } = useFetchGeneral(
		params.categoria,
		params.tipo,
		page
	);
	const handleChange = (event, value) => {
		setPage(value);
	};
	const titulo = () => {
		if (params.tipo === "movie" && params.categoria === "popular") {
			return "PELÍCULAS POPULARES";
		}
		if (params.tipo === "movie" && params.categoria === "top_rated") {
			return "PELÍCULAS CON MEJOR CRITICA";
		}
		if (params.tipo === "movie" && params.categoria === "upcoming") {
			return "PELICULAS A ESTRENARSE";
		}
		if (params.tipo === "movie" && params.categoria === "trending") {
			return "PELICULAS TENDENCIAS";
		}
		if (params.tipo === "movie" && params.categoria === "now_playing") {
			return "PROXIMAMENTO EN EL CINE";
		}
		if (params.tipo === "tv" && params.categoria === "trending") {
			return "SERIES TENDENCIAS";
		}
		if (params.tipo === "tv" && params.categoria === "popular") {
			return "SERIES POPULARES";
		}
		if (params.tipo === "tv" && params.categoria === "top_rated") {
			return "SERIES CON MEJORES CRÍTICAS";
		}
		if (params.tipo === "tv" && params.categoria === "on_the_air") {
			return "SERIES EN TV";
		}
	};

	return (
		<div>
			<LoadingCircular isLoading={isLoading} />
			{!isLoading && (
				<>
					<div className="conteiner-title">
						<h3>{titulo()} </h3>
					</div>
					<div className="conteiner-sectionMovieTv">
						<div className="conteiner-cards">
							{result.map((curr) => (
								<Link to={`/${params.tipo}/${curr.id}/info`}>
									<IndividualView
										title={curr.title}
										image={`https://image.tmdb.org/t/p/w500/${curr.poster_path}`}
									/>
								</Link>
							))}
						</div>
					</div>
					<div className="conteiner-sectionMovieTv conteiner-paginado">
						<Pagination
							count={totalPages > 500 ? 500 : totalPages}
							page={page}
							onChange={handleChange}
							variant="outlined"
							shape="rounded"
							color="primary"
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default SectionMovieTv;
