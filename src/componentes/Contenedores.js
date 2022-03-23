import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import useFetchGeneral from "../hooks/UseFetchGeneral";
import "../styles/descartar.scss";

const Contenedores = () => {
	const { result: resultCarruselcheto, isLoading: isLoadingCarruselcheto } =
		useFetchGeneral("movie", "now_playing", "");
	return (
		<Carousel animation="slide" className="carrusel">
			{resultCarruselcheto.map((item, i) => (
				<Item
					key={i}
					imagen={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
				/>
			))}
		</Carousel>
	);
};

export default Contenedores;
