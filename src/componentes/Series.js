import VistaGrupal from "./VistaGrupal";
import useFetchGeneral from "../hooks/UseFetchGeneral";
import LoadingCircular from "./LoadingCircular";
const Series = () => {
	const { result, isLoading } = useFetchGeneral("popular", "tv");
	const { result: resultTvTopRated, isLoading: isLoadingTvTopRated } =
		useFetchGeneral("top_rated", "tv");
	const { result: resultOnTheAir, isLoading: isLoadingOnTheAir } =
		useFetchGeneral("on_the_air", "tv");

	const isLoadingGeneral =
		isLoading || isLoadingTvTopRated || isLoadingOnTheAir;

	return (
		<section className="relative">
			<LoadingCircular isLoading={isLoading} />
			{!isLoadingGeneral && (
				<>
					<VistaGrupal
						titulo="SERIES POPULARES"
						isLoading={isLoading}
						result={result}
						categoria="popular"
						tipo="tv"
					/>
					<VistaGrupal
						titulo="SERIES CON MEJORES CRÍTICAS"
						isLoading={isLoadingGeneral}
						result={resultTvTopRated}
						categoria="top_rated"
						tipo="tv"
					/>
					<VistaGrupal
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

export default Series;
