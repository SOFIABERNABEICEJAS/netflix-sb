import { DataObjectSharp } from "@mui/icons-material";
import { positions } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/moviesInfo.scss";

const MoviesInfo = () => {
	const [infomovie, setInfomovie] = useState([]);
	const params = useParams();
	useEffect(() => {
		fetch(
			`
			https://api.themoviedb.org/3/movie/${params.id}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es&page=1`
		)
			.then((res) => res.json())
			.then((data) => setInfomovie(data));
		console.log(infomovie);
	}, [params.id]);

	const fecha = new Date(infomovie.release_date);
	const año = fecha.getFullYear();

	console.log(infomovie?.production_countries);

	return (
		<div>
			<div
				className="moviesInfo-fondo"
				style={{
					backgroundImage:
						"url(" +
						`https://image.tmdb.org/t/p/original/${infomovie.backdrop_path}` +
						")",
					backgroundSize: "cover",
					backgroundPosition: "center",
					minHeight: "100vh",
				}}
			></div>
			<div className="moviesInfo-conteiner">
				<div className="moviesInfo-conteiner-img">
					<img
						src={`https://image.tmdb.org/t/p/w500/${infomovie.poster_path}`}
						alt={infomovie.original_title}
					/>
				</div>
				<div className="moviesInfo-conteiner-texto">
					<div className=" moviesInfo-conteiner-title">
						<h2>{infomovie.original_title}</h2>
						<h3>{año}</h3>
					</div>
					<div>
						<p>Duración: {infomovie.runtime} seg.</p>
					</div>
					<div className="moviesInfo-conteiner-info">
						<p>{infomovie.overview} </p>
					</div>
					<div>
						<p>Presupuesto: ${infomovie.budget ? infomovie.budget : 0}</p>

						<p>
							Recaudación: $
							{infomovie.elongs_to_collection
								? infomovie.elongs_to_collectio
								: 0}
						</p>
						<p>Género:</p>
						<ul>
							{infomovie.genres &&
								infomovie.genres.map((curr) => (
									<li key={curr.id}>{curr.name} </li>
								))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MoviesInfo;
