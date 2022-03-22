import { useState, useEffect } from "react";

const UseFetchGeneral = (categorias, movieTv, week) => {
	const [result, setResult] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(
			`https://api.themoviedb.org/3/${categorias}/${movieTv}${week}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`
		)
			.then((res) => res.json())
			.then((data) => {
				setResult(data.results);
				setIsLoading(false);
			});
	}, []);
	return {
		result: result,
		isLoading: isLoading,
	};
};

export default UseFetchGeneral;
