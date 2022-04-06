import { Link } from "react-router-dom";
import VistaIndividual from "./VistaIndividual";
import "../styles/VistaGrupal.scss";
import imagenRota from "../assets/imagenRota.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const VistaGrupal = ({ titulo, result, tipo, categoria }) => {
	return (
		<div className="vista-grupal">
			<Link to={`/${tipo}/${categoria}`}>
				<div className="vista-grupal-titulo">
					<h3>{titulo} </h3>
					<ArrowForwardIosIcon aria-label="arrow" fontSize="small" />
				</div>
			</Link>

			<Slider arrows={true} slidesToShow={5}>
				{result.map((curr) => (
					<Link to={`/${tipo}/${curr.id}/info`}>
						<VistaIndividual
							title={curr.title || curr.name}
							image={
								curr.poster_path
									? `https://image.tmdb.org/t/p/w500/${curr.poster_path}`
									: imagenRota
							}
						/>
					</Link>
				))}
			</Slider>
		</div>
	);
};

export default VistaGrupal;