import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
	definirURLGeneral,
	apiKey,
	lenguaje,
	paginas,
} from "../auxiliares/variables";

const UseFetchDetalles = () => {
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
