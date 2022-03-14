import "../styles/_GroupView.scss";
import IndividualView from "./IndividualView";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Carrusel from "./Carrusel";

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
		<div className="group-view-conteiner">
			<div>
				<h2>{titulo}</h2>
			</div>

			<div className="group-view">
				{groupview.map((curr) => (
					<Link to={`${url}/${curr.id}/info`} key={curr.id}>
						<IndividualView
							title={curr.title || curr.name}
							image={`https://image.tmdb.org/t/p/w500/${curr.poster_path}`}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};
export default GroupView;
