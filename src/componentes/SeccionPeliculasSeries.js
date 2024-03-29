import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingCircular from "./LoadingCircular";
import imagenRota from "../assets/imagenRota.png";
import "../styles/PeliculasSeries.scss";
import useFetchGeneral from "../hooks/UseFetchGeneral";
import VistaIndividual from "./VistaIndividual";
import Pagination from "@mui/material/Pagination";
import { mobile } from "../auxiliares/variables";

const SeccionPeliculasSeries = () => {
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
			return "PELÍCULAS CON MEJORES CRÍTICAS";
		}
		if (params.tipo === "movie" && params.categoria === "upcoming") {
			return "PELICULAS A ESTRENARSE";
		}
		if (params.tipo === "movie" && params.categoria === "trending") {
			return "PELICULAS TENDENCIAS";
		}
		if (params.tipo === "movie" && params.categoria === "now_playing") {
			return "PROXIMAMENTO EN CINE";
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
		<section className="peliculasSeries">
			<LoadingCircular isLoading={isLoading} />
			{!isLoading && (
				<>
					<div className="contenedor-titulo">
						<h3>{titulo()} </h3>
					</div>
					<div className="contenedor-peliculasSerie">
						<div className="contenedor-cartas">
							{result.map((curr) => (
								<Link to={`/${params.tipo}/${curr.id}/info`} key={curr.id}>
									<VistaIndividual
										titulo={curr.title ? curr.title : curr.name}
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
					<div className="contenedor-paginado">
						{mobile && (
							<Pagination
								size="small"
								count={totalPages > 500 ? 500 : totalPages}
								page={page}
								onChange={handleChange}
								variant="outlined"
								shape="rounded"
								color="primary"
							/>
						)}
						{!mobile && (
							<Pagination
								count={totalPages > 500 ? 500 : totalPages}
								page={page}
								onChange={handleChange}
								variant="outlined"
								shape="rounded"
								color="primary"
							/>
						)}
					</div>
				</>
			)}
		</section>
	);
};

export default SeccionPeliculasSeries;
