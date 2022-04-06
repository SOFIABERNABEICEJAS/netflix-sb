import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { urlBase, apiKey, lenguaje, paginas } from "../auxiliares/variables";

const UseFechSearch = (page) => {
	const params = useParams();
	const [result, setResult] = useState([]);
	const [isLoading, setIsloading] = useState(false);
	const [totalPages, setTotalPages] = useState(1);
	useEffect(() => {
		setIsloading(true);
		fetch(
			`${urlBase}search/multi?${apiKey}&query=${params.nombre}${lenguaje}es-AR${paginas}${page}`
		)
			.then((res) => res.json())
			.then((data) => {
				setResult(data.results);
				setIsloading(false);
				setTotalPages(data.total_pages);
			});
	}, [params.nombre, page]);
	return {
		result: result,
		isLoading: isLoading,
		totalPages: totalPages,
	};
};

export default UseFechSearch;
