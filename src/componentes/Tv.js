import GroupView from "./GroupView";
import useFetchGeneral from "../hooks/UseFetchGeneral";

const Tv = () => {
	const { result: resultTvPopular, isLoading: isLoadingTvPopular } =
		useFetchGeneral("tv", "popular", "");
	const { result: resultTvTopRated, isLoading: isLoadingTvTopRated } =
		useFetchGeneral("tv", "top_rated", "");
	const { result: resultOnTheAir, isLoading: isLoadingOnTheAir } =
		useFetchGeneral("tv", "on_the_air", "");

	return (
		<section>
			<GroupView
				titulo="SERIES POPULARES"
				result={resultTvPopular}
				categoria="popular"
				tipo="tv"
			/>
			<GroupView
				titulo="SERIES CON MEJORES CRÍTICAS"
				result={resultTvTopRated}
				categoria="top_rated"
				tipo="tv"
			/>
			<GroupView
				titulo="SERIES EN TV"
				result={resultOnTheAir}
				categoria="on_the_air"
				tipo="tv"
			/>
		</section>
	);
};

export default Tv;
