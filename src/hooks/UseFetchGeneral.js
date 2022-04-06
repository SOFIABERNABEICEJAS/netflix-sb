import { useState, useEffect } from "react";
import { urlBase, apiKey, lenguaje, paginas } from "../auxiliares/variables";
import { definirURLGeneral } from ".../auxiliares/variables";

//https://api.themoviedb.org/3/${categorias}/${tipo}${week}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`

const UseFetchGeneral = (categoria, tipo, page) => {
	const [result, setResult] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [totalPages, setTotalPages] = useState(1);

	const url = `${urlBase}${definirURLGeneral(
		categoria,
		tipo,
		categoria === "trending" ? "week" : ""
	)}?${apiKey}${lenguaje}es-AR${paginas}${page}`;

	useEffect(() => {
		setIsLoading(true);
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setResult(data.results);
				setIsLoading(false);
				setTotalPages(data.total_pages);
			});
	}, [page]);

	return {
		result: result,
		isLoading: isLoading,
		totalPages: totalPages,
	};
};

export default UseFetchGeneral;
