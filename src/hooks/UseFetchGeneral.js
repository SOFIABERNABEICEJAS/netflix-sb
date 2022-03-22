import { useState, useEffect } from "react";

const UseFetchGeneral = (categorias, movieTv, week) => {
	const [resultMovie, setResultMovie] = useState([]);
	const [isLoadingMovie, setIsLoadingMovie] = useState(false);

	useEffect(() => {
		setIsLoadingMovie(true);
		fetch(
			`https://api.themoviedb.org/3/${categorias}/${movieTv}${week}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`
		)
			.then((res) => res.json())
			.then((data) => {
				setResultMovie(data.results);
				setIsLoadingMovie(false);
			});
	}, []);
	console.log(resultMovie);

	return {
		resultMovie: resultMovie,
		isLoadingMovie: isLoadingMovie,
	};
};

export default UseFetchGeneral;
