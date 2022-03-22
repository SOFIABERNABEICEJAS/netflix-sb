import GroupView from "./GroupView";
import CarruselHome from "./CarruselHome";
import useFetchGeneral from "../hooks/UseFetchGeneral";

const Home = () => {
	const { result, isLoading } = useFetchGeneral("trending", "movie", "/week");
	const { result: resultTv, isLoading: isLoadingTv } = useFetchGeneral(
		"trending",
		"tv",
		"/week"
	);
	const { result: resultCarrusel, isLoading: isLoadingCarrusel } =
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
				isLoading={isLoading}
				result={result}
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
