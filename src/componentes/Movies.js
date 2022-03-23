import GroupView from "./GroupView";
import useFetchGeneral from "../hooks/UseFetchGeneral";
import Contenedores from "./Contenedores";

const Movies = () => {
	const { result: resultPopular, isLoading: isLoadingPopular } =
		useFetchGeneral("movie", "popular", "");
	const { result: resultTopRated, isLoading: isLoadingTopRated } =
		useFetchGeneral("movie", "top_rated", "");
	const { result: resultUpcoming, isLoading: isLoadingUpcoming } =
		useFetchGeneral("movie", "upcoming", "");
	const { result: resultNowPlaying, isLoading: isLoadingNowPlaying } =
		useFetchGeneral("movie", "now_playing", "");

	return (
		<div>
			<GroupView
				titulo="PELÍCULAS POPULARES"
				result={resultPopular}
				categoria="popular"
				tipo="movie"
			/>
			<GroupView
				titulo="PELÍCULAS CON MEJORES CRITICAS"
				result={resultTopRated}
				tipo="movie"
				categoria="top_rated"
			/>
			<GroupView
				titulo="PELICULAS A ESTRENARSE"
				result={resultUpcoming}
				tipo="movie"
				categoria="upcoming"
			/>
			<GroupView
				titulo="PELICULAS EN EL CINE"
				result={resultNowPlaying}
				tipo="movie"
				categoria="now_playing"
			/>
		</div>
	);
};

export default Movies;
