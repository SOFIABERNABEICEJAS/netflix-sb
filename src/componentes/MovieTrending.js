import useFetchGeneral from "../hooks/UseFetchGeneral";
import IndividualView from "./IndividualView";
import { Link } from "react-router-dom";
import "../styles/MovieTrending.scss";

const MovieTrending = () => {
	const { result, isLoading } = useFetchGeneral("trending", "movie", "/week");
	console.log(result);
	return (
		<div className="conteiner-section">
			<div className="conteiner-title">
				<h2>PELÍCULAS TENDENCIAS</h2>
			</div>
			<div className="conteiner-cards">
				{result.map((curr) => (
					<Link to={`/${curr.id}/info`} key={curr.id}>
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
