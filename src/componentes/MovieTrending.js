import useFetchGeneral from "../hooks/UseFetchGeneral";
import IndividualView from "./IndividualView";
import { Link } from "react-router-dom";
import "../styles/Section.scss";

const MovieTrending = () => {
	const { result, isLoading } = useFetchGeneral("trending", "movie", "/week");

	return (
		<div className="conteiner-section">
			<div className="conteiner-title">
				<h2>titulo</h2>
			</div>
			<div className="conteiner-cards">
				{result.map((curr) => (
					<Link to={`/movie/${curr.id}/info`}>
						<IndividualView
							title={curr.title}
							image={`https://image.tmdb.org/t/p/w500/${curr.poster_path}`}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default MovieTrending;
