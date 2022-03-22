import GroupView from "./GroupView";
import useFetchGeneral from "../hooks/UseFetchGeneral";

const Movies = () => {
	const { result: resultPopular, isLoading: isLoadingPopular } =
		useFetchGeneral("movie", "popular", "");
	const { resul: resultTopRated, isLoading: isLoadingTopRated } =
		useFetchGeneral("movie", "top_rated", "");
	const { result: resultUpcoming, isLoading: isLoadingUpcoming } =
		useFetchGeneral("movie", "upcoming", "");
	const { result: resultNowPlaying, isLoading: isLoadingNowPlaying } =
		useFetchGeneral("movie", "now_playing", "");

	return (
		<section>
			<GroupView titulo="Peliculas populares" result={resultPopular} />
			<GroupView
				titulo="Peliculas con mejores críticas"
				result={resultTopRated}
			/>
			<GroupView titulo="Peliculas a estrenarse" result={resultUpcoming} />
			<GroupView titulo="Peliculas en el cine" result={resultNowPlaying} />
		</section>
	);
};

export default Movies;
