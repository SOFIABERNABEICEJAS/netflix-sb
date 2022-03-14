import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoviesInfo = () => {
	const [infomovie, setInfomovie] = useState([]);
	const params = useParams();
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/${params.id}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`
		)
			.then((res) => res.json())
			.then((data) => setInfomovie(data.results));
	}, []);

	return (
		<div>
			<h2>titulo</h2>
			<spam></spam>
		</div>
	);
};

export default MoviesInfo;
