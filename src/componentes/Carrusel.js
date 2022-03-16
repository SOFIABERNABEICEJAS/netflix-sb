import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Carrusel.scss";

const Carrusel = () => {
	const [carrusel, setCarrusel] = useState([]);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`
		)
			.then((res) => res.json())
			.then((data) => setCarrusel(data.results));
		console.log(carrusel);
	}, []);
	return (
		<Slider arrows={true} slidesToShow={1}>
			{carrusel.map((curr) => (
				<Link>
					<article key={curr.id} className="conteiner-carrusel">
						<img src={`https://image.tmdb.org/t/p/w500/${curr.poster_path}`} />
					</article>
				</Link>
			))}
		</Slider>
	);
};

export default Carrusel;
