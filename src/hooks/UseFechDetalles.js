import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { urlBase, apiKey, lenguaje, paginas } from "../auxiliares/auxiliares";

//https://api.themoviedb.org/3/${categorias}/${tipo}${week}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`

const UseFetchDetalles = (tipo, categoria) => {
	const [infoDetalles, setInfoDetalles] = useState([]);
	const [isLoading, setIsloading] = useState(false);
	const params = useParams();

	const url = `${urlBase}${params.tipo}/${params.id}?${apiKey}${lenguaje}es-AR${paginas}1`;

	useEffect(() => {
		setIsloading(true);
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setInfoDetalles(data);
				setIsloading(false);
			});
	}, []);

	return {
		infoDetalles: infoDetalles,
		isLoading: isLoading,
	};
};

export default UseFetchDetalles;
