import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./componentes/Nav";
import MovieTrending from "./componentes/MovieTrending";
import MoviesInfo from "./componentes/MoviesInfo";
import Movies from "./componentes/Movies";
import RepartoPeliculas from "./componentes/peliculas/RepartoPeliculas";

import SimilaresPeliculas from "./componentes/peliculas/SimilaresPeliculas";

import Tv from "./componentes/Tv";
import InfoTv from "./componentes/series/InfoTv";
import EpisodioTv from "./componentes/series/EpisodioTv";
import RepartoTv from "./componentes/series/RepartoTv";
import SimilaresTv from "./componentes/series/SimilaresTv";

import Busqueda from "./componentes/Busqueda";

import Home from "./componentes/Home";
import Error404 from "./componentes/Error404";

const App = () => {
	return (
		<BrowserRouter>
			<Nav />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="movie/:id/info" element={<MoviesInfo />} />
				<Route path="/movie" element={<Movies />} />
				<Route path="/movie/trending" element={<MovieTrending />} />

				<Route path="/movie/:id/reparto" element={<RepartoPeliculas />} />
				<Route path="/movie/:id/similares" element={<SimilaresPeliculas />} />
				<Route path="/tv" element={<Tv />} />
				<Route path="/tv/:id/info" element={<InfoTv />} />
				<Route path="/tv/:id/episodios" element={<EpisodioTv />} />
				<Route path="/tv/:id/reparto" element={<RepartoTv />} />
				<Route path="/tv/:id/similares" element={<SimilaresTv />} />

				<Route path="/busqueda/:nombre" element={<Busqueda />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
