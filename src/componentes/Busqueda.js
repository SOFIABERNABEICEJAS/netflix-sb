import { Link } from "react-router-dom";
import VistaIndividual from "./VistaIndividual";
import imagenRota from "../assets/imagenRota.png";
import "../styles/PeliculasSeries.scss";
import useFetchSerch from "../hooks/UseFetchSearch";
import LoadingCircular from "./LoadingCircular";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import { mobile } from "../auxiliares/variables";

const Busqueda = () => {
	const [page, setPage] = useState(1);
	const { result, isLoading, totalPages } = useFetchSerch(page);

	const handleChange = (event, value) => {
		setPage(value);
	};
	return (
		<div className="peliculasSeries">
			<LoadingCircular isLoading={isLoading} />
			{!isLoading && (
				<>
					<div className="contenedor-titulo">
						<h3>RESULTADO DE BUSQUEDA</h3>
					</div>
					<div className="contenedor-peliculasSerie">
						<div className="contenedor-cartas">
							{result.map((curr) => (
								<Link to={`/movie/${curr.id}/info`} key={curr.id}>
									<VistaIndividual
										title={curr.title}
										image={
											curr.poster_path
												? `https://image.tmdb.org/t/p/w500/${curr.poster_path}`
												: imagenRota
										}
									/>
								</Link>
							))}
						</div>
					</div>
					<div className="contenedor-paginado">
						{mobile && (
							<Pagination
								size="small"
								count={totalPages > 500 ? 500 : totalPages}
								page={page}
								onChange={handleChange}
								variant="outlined"
								shape="rounded"
								color="primary"
							/>
						)}
						{!mobile && (
							<Pagination
								count={totalPages > 500 ? 500 : totalPages}
								page={page}
								onChange={handleChange}
								variant="outlined"
								shape="rounded"
								color="primary"
							/>
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default Busqueda;
