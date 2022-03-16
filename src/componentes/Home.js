import GroupView from "./GroupView";
import Carrusel from "./Carrusel";
const Home = () => {
	return (
		<div>
			<Carrusel />
			<GroupView titulo="Peliculas tendencias" url="movie" />
			<GroupView titulo="Series tendencias" url="tv" />
		</div>
	);
};

export default Home;
