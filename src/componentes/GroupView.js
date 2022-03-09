import { useEffect, useState } from "react";
import "../styles/_vista-grupal.scss";
import IndividualView from "./IndividualView";
import { Link } from "react-router-dom";

const GroupView = ({ titulo, url }) => {
	const [groupview, setGroupview] = useState([]);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/${url}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`
		)
			.then((res) => res.json())
			.then((data) => setGroupview(data.results));
	}, []);

	return (
		<div className="vista-grupal">
			<h1>{titulo} </h1>
			{groupview.map((curr) => (
				<Link to={`/movies/${curr.id}/info`} key={curr.id}>
					<IndividualView
						title={curr.title || curr.name}
						image={`https://image.tmdb.org/t/p/w300/${curr.backdrop_path}`}
						id={curr.id}
					/>
				</Link>
			))}
		</div>
	);
};
export default GroupView;
