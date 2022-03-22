import GroupView from "./GroupView";
import CarruselHome from "./CarruselHome";
import useFetchGeneral from "../hooks/UseFetchGeneral";

const Home = () => {
	const { resultMovie, isLoadingMovie } = useFetchGeneral(
		"trending",
		"movie",
		"/week"
	);
	const { resultMovie: resultTv, isLoadingMovie: isLoadingTv } =
		useFetchGeneral("trending", "tv", "/week");
	const { resultMovie: resultCarrusel, isLoadingCarrusel: isLoadingCarrusel } =
		useFetchGeneral("movie", "now_playing", "");

	return (
		<div>
			<CarruselHome
				isLoading={isLoadingCarrusel}
				result={resultCarrusel}
				movieTv="movie"
			/>
			<GroupView
				titulo="Peliculas tendencias"
				isLoading={isLoadingMovie}
				result={resultMovie}
				movieTv="movie"
			/>
			<GroupView
				titulo="Series tendencias"
				isLoading={isLoadingTv}
				result={resultTv}
				movieTv="tv"
			/>
		</div>
	);
};

export default Home;
