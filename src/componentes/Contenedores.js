import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "../styles/descartar.scss";
const Contenedores = () => {
	return (
		<div className="container">
			<Slider
				dots={true}
				arrows={true}
				slidesToShow={1}
				autoplay={true}
				autoplaySpeed={1000}
			>
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

export default Contenedores;
