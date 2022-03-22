import useFetchGeneral from "../hooks/UseFetchGeneral";
import IndividualView from "./IndividualView";
import { Link } from "react-router-dom";
import Contenedores from "./Contenedores";

const MovieTrending = () => {
	const { result, isLoading } = useFetchGeneral("trending", "movie", "/week");
	console.log(result);
	return (
		<div>
			<Contenedores />

			{result.map((curr) => (
				<Link to={`/${curr.id}/info`} key={curr.id}>
					<IndividualView
						title={curr.title}
						image={`https://image.tmdb.org/t/p/w500/${curr.poster_path}`}
					/>
				</Link>
			))}
		</div>
	);
};

export default MovieTrending;
