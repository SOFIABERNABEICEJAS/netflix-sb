import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/InfoDetalles.scss";

const InfoDetalles = () => {
	const [infoDetalles, setInfoDetalles] = useState([]);
	const paramsId = useParams();
	const paramsTipo = useParams();

	useEffect(() => {
		fetch(
			`
			https://api.themoviedb.org/3/${paramsTipo.tipo}/${paramsId.id}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es&page=1`
		)
			.then((res) => res.json())
			.then((data) => setInfoDetalles(data));
	}, []);

	const fecha = new Date(
		infoDetalles.release_date
			? infoDetalles.release_date
			: infoDetalles.last_air_date
	);
	const año = fecha.getFullYear();

	return (
		<div>
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
					<div>
						<p>Duración: {infoDetalles.runtime} seg.</p>
					</div>
					<div className="infoDetalles-conteiner-info">
						<p>{infoDetalles.overview} </p>
					</div>
					<div>
						<p>Presupuesto: ${infoDetalles.budget ? infoDetalles.budget : 0}</p>
						<p>
							Recaudación: $
							{infoDetalles.elongs_to_collection
								? infoDetalles.elongs_to_collectio
								: 0}
						</p>
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
		</div>
	);
};

export default InfoDetalles;
