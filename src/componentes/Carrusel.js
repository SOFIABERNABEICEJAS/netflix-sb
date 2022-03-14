import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/_Carousel.scss";
const Carrusel = () => {
	return (
		<div className="container">
			<h2> peliculas/series</h2>
			<Slider dots={true} arrows={true} slidesToShow={4} autoplay={true}>
				<div>
					<img src="http://placekitten.com/g/400/200" />
				</div>
				<div>
					<img src="http://placekitten.com/g/400/200" />
				</div>
				<div>
					<img src="http://placekitten.com/g/400/200" />
				</div>
				<div>
					<img src="http://placekitten.com/g/400/200" />
				</div>
				<div>
					<img src="http://placekitten.com/g/400/200" />
				</div>
				<div>
					<img src="http://placekitten.com/g/400/200" />
				</div>
				<div>
					<img src="http://placekitten.com/g/400/200" />
				</div>
				<div>
					<img src="http://placekitten.com/g/400/200" />
				</div>
			</Slider>
		</div>
	);
};

export default Carrusel;
