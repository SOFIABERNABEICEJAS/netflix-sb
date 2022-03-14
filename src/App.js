import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Peliculas from "./componentes/peliculas/Peliculas";
import MoviesInfo from "./componentes/MoviesInfo";
import RepartoPeliculas from "./componentes/peliculas/RepartoPeliculas";
import VideosPeliculas from "./componentes/peliculas/VideosPeliculas";
import SimilaresPeliculas from "./componentes/peliculas/SimilaresPeliculas";

import Tv from "./componentes/series/Tv";
import InfoTv from "./componentes/series/InfoTv";
import EpisodioTv from "./componentes/series/EpisodioTv";
import RepartoTv from "./componentes/series/RepartoTv";
import SimilaresTv from "./componentes/series/SimilaresTv";

import Busqueda from "./componentes/Busqueda";

import Home from "./componentes/Home";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="movies/:id/info" element={<MoviesInfo />} />
				<Route path="/movies" element={<Peliculas />} />
				<Route path="/movies/:id/reparto" element={<RepartoPeliculas />} />
				<Route path="/movies/:id/videos" element={<VideosPeliculas />} />
				<Route path="/movies/:id/similares" element={<SimilaresPeliculas />} />
				<Route path="/tv" element={<Tv />} />
				<Route path="/tv/:id/info" element={<InfoTv />} />
				<Route path="/tv/:id/episodios" element={<EpisodioTv />} />
				<Route path="/tv/:id/reparto" element={<RepartoTv />} />
				<Route path="/tv/:id/similares" element={<SimilaresTv />} />

				<Route path="/busqueda/:nombre" element={<Busqueda />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
