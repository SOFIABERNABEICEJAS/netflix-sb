import Nav from "./Nav";
import GroupView from "./GroupView";
const Home = () => {
	return (
		<div>
			<Nav />
			<GroupView titulo="Peliculas tendencias" url="trending/movie/week" />
			<GroupView titulo="Series tendencias" url="trending/tv/week" />
		</div>
	);
};

export default Home;
