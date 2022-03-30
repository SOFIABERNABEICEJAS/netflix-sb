import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { urlBase, apiKey, lenguaje, page } from "../auxiliares/auxiliares";

//https://api.themoviedb.org/3/${categorias}/${tipo}${week}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`

const UseFetchDetalles = (categorias, tipo, week) => {
	const [infoDetalles, setInfoDetalles] = useState([]);
	const paramsId = useParams();
	const paramsTipo = useParams();
	const [isLoading, setIsLoading] = useState(false);

	const url = `${urlBase}${paramsTipo.tipo}/${paramsId.id}?${apiKey}${lenguaje}es${page}1`;

	useEffect(() => {
		setIsLoading(true);
		fetch(url)
			.then((res) => res.json())
			.then((data) => 
			  setInfoDetalles(data)
				setIsLoading(false);
			});
	}, []);

	return {
		infoDetalles: infoDetalles,
		isLoading: isLoading,
	};
};

export default UseFetchDetalles