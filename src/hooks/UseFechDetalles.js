import { useState, useEffect } from "react";
import { urlBase, apiKey, lenguaje, page } from "../auxiliares/auxiliares";

//https://api.themoviedb.org/3/${categorias}/${tipo}${week}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`

const UseFetchDetalles = (categorias, tipo, week) => {
	const [resultDetalles, setResultDetalles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const url = `${urlBase}${tipo}/${id}?${apiKey}${lenguaje}es-AR${page}1`;

	useEffect(() => {
		setIsLoading(true);
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setResultDetalles(data.results);
				setIsLoading(false);
			});
	}, []);

	return {
		resultDetalles: resultDetalles,
		isLoading: isLoading,
	};
};

export default UseFetchDetalles;
