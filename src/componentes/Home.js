import GroupView from "./GroupView";
import CarruselHome from "./CarruselHome";
import useFetchGeneral from "../hooks/UseFetchGeneral";
import LoadingCircular from "./LoadingCircular";
import "../styles/home.scss";
const Home = () => {
	const { result, isLoading } = useFetchGeneral("trending", "movie", "/week");
	const { result: resultTv, isLoading: isLoadingTv } = useFetchGeneral(
		"trending",
		"tv",
		"/week"
	);
	const { result: resultCarrusel, isLoading: isLoadingCarrusel } =
		useFetchGeneral("movie", "now_playing", "");

	const isLoadingGeneral = isLoading || isLoadingTv || isLoadingCarrusel;

	return (
		<div className="relative">
			<LoadingCircular isLoading={isLoading} />
			{!isLoadingGeneral && (
				<>
					<CarruselHome
						isLoading={isLoadingGeneral}
						result={resultCarrusel}
						tipo="movie"
						categoria="now_playing"
					/>
					<GroupView
						titulo="PELICULAS TENDENCIAS"
						isLoading={isLoadingGeneral}
						result={result}
						tipo="movie"
						categoria="trending"
					/>
					<GroupView
						titulo="SERIES TENDENCIAS"
						isLoading={isLoadingGeneral}
						result={resultTv}
						tipo="tv"
						categoria="trending"
					/>
				</>
			)}
		</div>
	);
};

export default Home;
