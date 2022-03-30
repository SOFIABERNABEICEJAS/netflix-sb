import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./componentes/Nav";
import Home from "./componentes/Home";
import Busqueda from "./componentes/Busqueda";
import Footer from "./componentes/Footer";
import MovieTrending from "./componentes/MovieTrending";
import InfoDetalles from "./componentes/InfoDetalles";
import Movies from "./componentes/Movies";

import Tv from "./componentes/Tv";
import TvTrending from "./componentes/TvTrending";

import Error404 from "./componentes/Error404";

const App = () => {
	return (
		<BrowserRouter>
			<Nav />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:tipo/:id/info" element={<InfoDetalles />} />
				<Route path="/movie" element={<Movies />} />
				<Route path="/:tipo/:categoria" element={<MovieTrending />} />

				<Route path="/tv" element={<Tv />} />

				<Route path="/busqueda/:nombre" element={<Busqueda />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
