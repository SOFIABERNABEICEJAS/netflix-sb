import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Paginado from "./Paginado";
import "../styles/Section.scss";
import useFetchGeneral from "../hooks/UseFetchGeneral";
import IndividualView from "./IndividualView";

import * as React from "react";
import Pagination from "@mui/material/Pagination";

const ListaMovieTv = () => {
	const [page, setPage] = useState(1);
	const { result, isLoading, totalPages } = useFetchGeneral(
		"now_playing",
		"movie",
		page
	);
	const handleChange = (event, value) => {
		setPage(value);
	};

	return (
		<div className="conteiner-section">
			<div className="conteiner-title">
				<h2>titulo</h2>
			</div>
			<div className="conteiner-cards">
				{result.map((curr) => (
					<Link to={`/movie/${curr.id}/info`}>
						<IndividualView
							title={curr.title}
							image={`https://image.tmdb.org/t/p/w500/${curr.poster_path}`}
						/>
					</Link>
				))}
			</div>
			<Pagination
				count={totalPages}
				page={page}
				onChange={handleChange}
				variant="outlined"
				shape="rounded"
				color="primary"
			/>
		</div>
	);
};

export default ListaMovieTv;
