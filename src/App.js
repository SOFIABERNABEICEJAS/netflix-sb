import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./componentes/Nav";
import NavResponsive from "./componentes/NavResponsive";
import Home from "./componentes/Home";
import Busqueda from "./componentes/Busqueda";
import SeccionPeliculasSeries from "./componentes/SeccionPeliculasSeries";
import InfoDetalles from "./componentes/InfoDetalles";
import Peliculas from "./componentes/Peliculas";
import Series from "./componentes/Series";
import Error404 from "./componentes/Error404";
import { mobile } from "./auxiliares/variables";

const App = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:tipo/:id/info" element={<InfoDetalles />} />
				<Route path="/movie" element={<Peliculas />} />
				<Route path="/:tipo/:categoria" element={<SeccionPeliculasSeries />} />
				<Route path="/tv" element={<Series />} />
				<Route path="/search/:nombre" element={<Busqueda />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
			{mobile && <NavResponsive />}
		</BrowserRouter>
	);
};

export default App;
