import GroupView from "./GroupView";
import useFetchGeneral from "../hooks/UseFetchGeneral";
import LoadingCircular from "./LoadingCircular";
const Tv = () => {
	const { result, isLoading } = useFetchGeneral("tv", "popular", "");
	const { result: resultTvTopRated, isLoading: isLoadingTvTopRated } =
		useFetchGeneral("tv", "top_rated", "");
	const { result: resultOnTheAir, isLoading: isLoadingOnTheAir } =
		useFetchGeneral("tv", "on_the_air", "");

	const isLoadingGeneral =
		isLoading || isLoadingTvTopRated || isLoadingOnTheAir;

	return (
		<section className="relative">
			<LoadingCircular isLoading={isLoading} />
			{!isLoadingGeneral && (
				<>
					<GroupView
						titulo="SERIES POPULARES"
						isLoading={isLoading}
						result={result}
						categoria="popular"
						tipo="tv"
					/>
					<GroupView
						titulo="SERIES CON MEJORES CRÍTICAS"
						isLoading={isLoadingGeneral}
						result={resultTvTopRated}
						categoria="top_rated"
						tipo="tv"
					/>
					<GroupView
						titulo="SERIES EN TV"
						isLoading={isLoadingGeneral}
						result={resultOnTheAir}
						categoria="on_the_air"
						tipo="tv"
					/>
				</>
			)}
		</section>
	);
};

export default Tv;
