import { useParams } from "react-router-dom";
import UseFetchDetalles from "../hooks/UseFechDetalles";
import "../styles/InfoDetalles.scss";
import LoadingCircular from "./LoadingCircular";
import imagenRota from "../assets/imagenRota.png";
import { tablet } from "../auxiliares/variables";

const InfoDetalles = () => {
	const params = useParams();
	const { infoDetalles, isLoading } = UseFetchDetalles(
		params.tipo,
		params.id,
		1
	);

	const fecha = new Date(
		infoDetalles.release_date
			? infoDetalles.release_date
			: infoDetalles.last_air_date
	);
	const año = fecha.getFullYear();

	return (
		<div className="infoDetalles">
			<LoadingCircular isLoading={isLoading} />
			{!isLoading && (
				<>
					{!tablet && (
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
					)}
					{tablet && (
						<div className="infoDetalles-imagen-mobile">
							<img
								src={
									infoDetalles.backdrop_path
										? `https://image.tmdb.org/t/p/original/${
												infoDetalles.backdrop_path
										  } alt="${
												infoDetalles.name
													? infoDetalles.name
													: infoDetalles.title
										  }"`
										: imagenRota
								}
							></img>
						</div>
					)}

					<article className="infoDetalles-conteiner">
						<div className="infoDetalles-conteiner-img">
							<img
								src={
									infoDetalles.poster_path
										? `https://image.tmdb.org/t/p/w500/${infoDetalles.poster_path}`
										: imagenRota
								}
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
								<p>
									{infoDetalles.vote_average ? infoDetalles.vote_average : 0} /
									10 ⭐{" "}
								</p>
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
					</article>
				</>
			)}
		</div>
	);
};

export default InfoDetalles;
