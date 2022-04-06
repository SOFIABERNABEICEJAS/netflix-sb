import { useState, useEffect } from "react";
import { urlBase, apiKey, lenguaje, paginas } from "../auxiliares/variables";
import { definirURLGeneral } from "../auxiliares/funciones";

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
