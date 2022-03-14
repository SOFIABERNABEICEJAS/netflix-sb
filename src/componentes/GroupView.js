import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/_GroupView.scss";
import IndividualView from "./IndividualView";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const GroupView = ({ titulo, url }) => {
	const [groupview, setGroupview] = useState([]);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/trending/${url}/week?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`
		)
			.then((res) => res.json())
			.then((data) => setGroupview(data.results));
	}, []);
	return (
		<div className="gruop-view">
			<Link to={`${url}/treding`}>
				<h2>{titulo} </h2>
			</Link>
			<Slider arrows={true} slidesToShow={5}>
				{groupview.map((curr) => (
					<Link to={`${url}/${curr.id}/info`}>
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
