import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/InfoDetalles.scss";
import LoadingCircular from "./LoadingCircular";

const InfoDetalles = () => {
	const [infoDetalles, setInfoDetalles] = useState([]);
	const [isLoading, setIsloading] = useState(false);
	const params = useParams();

	useEffect(() => {
		setIsloading(true);
		fetch(
			`
			https://api.themoviedb.org/3/${params.tipo}/${params.id}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es&page=1`
		)
			.then((res) => res.json())
			.then((data) => {
				setInfoDetalles(data);
				setIsloading(false);
			});
	}, []);

	const fecha = new Date(
		infoDetalles.release_date
			? infoDetalles.release_date
			: infoDetalles.last_air_date
	);
	const año = fecha.getFullYear();

	return (
		<div>
			<LoadingCircular isLoading={isLoading} />
			{!isLoading && (
				<>
					<div
						className="infoDetalles-fondo"
						style={{
							backgroundImage:
								"url(" +
								`https://image.tmdb.org/t/p/original/${infoDetalles.backdrop_path}` +
								")",
							backgroundSize: "cover",
							backgroundPosition: "center",
							minHeight: "100vh",
						}}
					></div>
					<div className="infoDetalles-conteiner">
						<div className="infoDetalles-conteiner-img">
							<img
								src={`https://image.tmdb.org/t/p/w500/${infoDetalles.poster_path}`}
								alt={
									infoDetalles.original_title
										? infoDetalles.original_title
										: infoDetalles.original_name
								}
							/>
						</div>
						<div className="infoDetalles-conteiner-texto">
							<div className=" infoDetalles-conteiner-title">
								<h2>
									{infoDetalles.original_title
										? infoDetalles.original_title
										: infoDetalles.original_name}
								</h2>
								<h3>{año}</h3>
							</div>
							<div className=" contenedor-star">
								<p>{infoDetalles.vote_average} / 10 ⭐ </p>
							</div>
							<div>
								{params.tipo === "movie" && (
									<p>
										Duración:{" "}
										{infoDetalles.runtime
											? ` ${infoDetalles.runtime} seg.`
											: ` 0 seg`}
									</p>
								)}
							</div>
							<div className="infoDetalles-conteiner-info">
								<p>{infoDetalles.overview} </p>
							</div>

							<div>
								{params.tipo === "movie" && (
									<p>
										Presupuesto: $
										{infoDetalles.budget ? infoDetalles.budget : 0}
									</p>
								)}
								{params.tipo === "movie" && (
									<p>
										Recaudación: $
										{infoDetalles.elongs_to_collection
											? infoDetalles.elongs_to_collectio
											: 0}
									</p>
								)}
								{params.tipo === "tv" && (
									<p>
										{infoDetalles.number_of_seasons
											? `Temporadas: ${infoDetalles.number_of_seasons}`
											: " Sin datos"}
									</p>
								)}
								{params.tipo === "tv" && (
									<p>
										{infoDetalles.number_of_episodes
											? `Cantidad de episodios: ${infoDetalles.number_of_episodes}`
											: " Sin datos"}
									</p>
								)}
								<p>Género:</p>
								<ul>
									{infoDetalles.genres &&
										infoDetalles.genres.map((curr) => (
											<li key={curr.id}>{curr.name} </li>
										))}
								</ul>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default InfoDetalles;
