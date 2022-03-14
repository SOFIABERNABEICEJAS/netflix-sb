import Nav from "./Nav";
import GroupView from "./GroupView";
import Carrusel from "./Carrusel";
const Home = () => {
	return (
		<div>
			<Nav />
			<Carrusel titulo="Peliculas tendencias" url="movie" />
			<Carrusel titulo="Series tendencias" url="tv" />
		</div>
	);
};

export default Home;
