import { useState, useEffect } from "react";
import{ urlBase, apiKey, definirURL, lenguaje, page } from "../auxiliares/auxiliares"
 
//https://api.themoviedb.org/3/${categorias}/${tipo}${week}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`
		

  const UseFetchGeneral = (categorias, tipo, week) => {
	const [result, setResult] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	


	const url =  `${urlBase}${categorias}/${tipo}${week}?${apiKey}${lenguaje}es-AR${page}1`


	useEffect(() => {
		setIsLoading(true);
		fetch(url)
			
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
