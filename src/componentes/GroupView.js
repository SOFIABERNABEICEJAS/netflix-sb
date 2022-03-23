import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/GroupView.scss";
import IndividualView from "./IndividualView";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const GroupView = ({ titulo, result, tipo, categoria, Loading }) => {
	return (
		<div className="gruop-view">
			<Link to={`/${tipo}/${categoria}`}>
				<div className="gruop-view-title">
					<h3>{titulo} </h3>
					<ArrowForwardIosIcon aria-label="arrow" fontSize="small" />
				</div>
			</Link>

			<Slider arrows={true} slidesToShow={5}>
				{result.map((curr) => (
					<Link to={`${curr.id}/info`} key={curr.id}>
						<IndividualView
							title={curr.title || curr.name}
							image={`https://image.tmdb.org/t/p/w500/${curr.poster_path}`}
						/>
					</Link>
				))}
			</Slider>
		</div>
	);
};

export default GroupView;
