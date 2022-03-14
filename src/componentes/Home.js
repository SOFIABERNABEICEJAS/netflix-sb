import Nav from "./Nav";
import GroupView from "./GroupView";

const Home = () => {
	return (
		<div>
			<Nav />
			<GroupView titulo="Peliculas tendencias" url="movie" />
			<GroupView titulo="Series tendencias" url="tv" />
		</div>
	);
};

export default Home;
