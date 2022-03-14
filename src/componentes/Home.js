import Nav from "./Nav";
import GroupView from "./GroupView";
import Carrusel from "./Carrusel";
const Home = () => {
	return (
		<div>
			<Nav />
			<Carrusel />
			<GroupView titulo="Peliculas tendencias" url="movie" />
			<GroupView titulo="Series tendencias" url="tv" />
		</div>
	);
};

export default Home;
