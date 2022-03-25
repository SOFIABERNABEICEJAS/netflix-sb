import GroupView from "./GroupView";
import useFetchGeneral from "../hooks/UseFetchGeneral";
import LoadingCircular from "./LoadingCircular";

const Movies = () => {
	const { result, isLoading } = useFetchGeneral("movie", "popular", "");
	const { result: resultTopRated, isLoading: isLoadingTopRated } =
		useFetchGeneral("movie", "top_rated", "");
	const { result: resultUpcoming, isLoading: isLoadingUpcoming } =
		useFetchGeneral("movie", "upcoming", "");
	const { result: resultNowPlaying, isLoading: isLoadingNowPlaying } =
		useFetchGeneral("movie", "now_playing", "");

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
						titulo="PELÍCULAS CON MEJORES CRITICAS"
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
