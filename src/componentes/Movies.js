import GroupView from "./GroupView";
import useFetchGeneral from "../hooks/UseFetchGeneral";
import LoadingCircular from "./LoadingCircular";

const Movies = () => {
	const { result, isLoading } = useFetchGeneral("popular", "movie", 1);
	const { result: resultTopRated, isLoading: isLoadingTopRated } =
		useFetchGeneral("top_rated", "movie", 1);
	const { result: resultUpcoming, isLoading: isLoadingUpcoming } =
		useFetchGeneral("upcoming", "movie", 1);
	const { result: resultNowPlaying, isLoading: isLoadingNowPlaying } =
		useFetchGeneral("now_playing", "movie", 1);

	const isLoadingGeneral =
		isLoading || isLoadingTopRated || isLoadingUpcoming || isLoadingNowPlaying;

	return (
		<div>
			<LoadingCircular isLoading={isLoading} />
			{!isLoadingGeneral && (
				<>
					<GroupView
						titulo="PELÍCULAS POPULARES"
						isLoading={isLoadingGeneral}
						result={result}
						categoria="popular"
						tipo="movie"
					/>
					<GroupView
						titulo="PELÍCULAS CON MEJOR CRITICA"
						isLoading={isLoadingGeneral}
						result={resultTopRated}
						tipo="movie"
						categoria="top_rated"
					/>
					<GroupView
						titulo="PELICULAS A ESTRENARSE"
						isLoading={isLoadingGeneral}
						result={resultUpcoming}
						tipo="movie"
						categoria="upcoming"
					/>
					<GroupView
						titulo="PELICULAS EN EL CINE"
						isLoading={isLoadingGeneral}
						result={resultNowPlaying}
						tipo="movie"
						categoria="now_playing"
					/>
				</>
			)}
		</div>
	);
};

export default Movies;
