import VistaGrupal from "./VistaGrupal";
import CarruselHome from "./CarruselHome";
import useFetchGeneral from "../hooks/UseFetchGeneral";
import LoadingCircular from "./LoadingCircular";
import "../styles/home.scss";

const Home = () => {
	const { result, isLoading } = useFetchGeneral("trending", "movie", 1, "week");
	const { result: resultTv, isLoading: isLoadingTv } = useFetchGeneral(
		"trending",
		"tv",
		1,
		"week"
	);

	const { result: resultCarrusel, isLoading: isLoadingCarrusel } =
		useFetchGeneral("now_playing", "movie", 1);

	const isLoadingGeneral = isLoading || isLoadingTv || isLoadingCarrusel;

	return (
		<section className="home">
			<LoadingCircular isLoading={isLoading} />
			{!isLoadingGeneral && (
				<>
					<CarruselHome
						isLoading={isLoadingGeneral}
						result={resultCarrusel}
						tipo="movie"
						categoria="now_playing"
					/>
					<VistaGrupal
						titulo="PELICULAS TENDENCIAS"
						isLoading={isLoadingGeneral}
						result={result}
						tipo="movie"
						categoria="trending"
					/>
					<VistaGrupal
						titulo="SERIES TENDENCIAS"
						isLoading={isLoadingGeneral}
						result={resultTv}
						tipo="tv"
						categoria="trending"
					/>
				</>
			)}
		</section>
	);
};

export default Home;
