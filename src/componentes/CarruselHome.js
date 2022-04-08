import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "../styles/Carrusel.scss";

const CarruselHome = ({ result, tipo }) => {
	return (
		<div className="contenedor-carrusel">
			<Slider arrows={false} dots={true} slidesToShow={1} autoplay={true}>
				{result.map((curr) => (
					<Link key={curr.id} to={`${tipo}/${curr.id}/info`}>
						<article>
							<img
								src={`https://image.tmdb.org/t/p/original/${curr.backdrop_path}`}
								alt="curr.name ? curr.name : curr.title"
							/>
						</article>
					</Link>
				))}
			</Slider>
		</div>
	);
};

export default CarruselHome;
