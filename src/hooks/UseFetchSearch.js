import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiKey, lenguaje, paginas } from "../auxiliares/variables";

const UseFechSearch = () => {
	const params = useParams();
	const [result, setResult] = useState([]);
	const [isLoading, setIsloading] = useState(false);
	useEffect(() => {
		setIsloading(true);
		fetch(
			`${urlBase}search/multi?${apiKey}&query=${params.nombre}${lenguaje}es-AR${paginas}=1`
		)
			.then((res) => res.json())
			.then((data) => {
				setResult(data.results);
				setIsloading(false);
			});
	}, [params.nombre]);
	return {
		result: result,
		isLoading: isLoading,
		totalPages: totalPages,
	};
};

export default UseFechSearch;
