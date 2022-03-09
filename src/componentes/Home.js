import Nav from "./Nav";
import VistaGrupal from "./VistaGrupal";
const Home = () => {
	return (
		<div>
			<Nav />
			<VistaGrupal titulo="Peliculas populares" url="popular" />
			<VistaGrupal titulo="Peliculas mejor puntuadas" url="top_rated" />
		</div>
	);
};

export default Home;
