import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "../styles/Carrusel.scss";

const CarruselHome = ({ result, movieTv }) => {
	return (
		<div className="container">
			<Slider arrows={false} dots={true} slidesToShow={1} autoplay={true}>
				{result.map((curr) => (
					<Link key={curr.id} to={`${movieTv}/${curr.id}/info`}>
						<article className="conteiner-carrusel">
							<img
								src={`https://image.tmdb.org/t/p/original/${curr.poster_path}`}
							/>
						</article>
					</Link>
				))}
			</Slider>
		</div>
	);
};

export default CarruselHome;
