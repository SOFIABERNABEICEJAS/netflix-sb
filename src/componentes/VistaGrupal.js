import { useEffect, useState } from "react";
import "../styles/_vista-grupal.scss";
import VistaIndividual from "./VistaIndividual";
import { Link } from "react-router-dom";

const VistaGrupal = ({ titulo, url }) => {
	const [vistagrupal, setVistagrupal] = useState([]);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${url}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`
		)
			.then((res) => res.json())
			.then((data) => setVistagrupal(data.results));
	}, []);

	return (
		<div className="vista-grupal">
			<h1>{titulo} </h1>
			{vistagrupal.map((curr) => (
				<VistaIndividual
					titulo={curr.title}
					imagen={`https://image.tmdb.org/t/p/w200/${curr.poster_path}`}
				/>
			))}
		</div>
	);
};
export default VistaGrupal;
