import useFetchGeneral from "../hooks/UseFetchGeneral";
import IndividualView from "./IndividualView";
import { Link } from "react-router-dom";
import "../styles/Section.scss";

const TvTrending = () => {
	const { result, isLoading } = useFetchGeneral("trending", "tv", "/week");

	return (
		<div className="conteiner-section">
			<div className="conteiner-title">
				<h2>SERIES TENDENCIAS</h2>
			</div>
			<div className="conteiner-cards">
				{result.map((curr) => (
					<Link to={`tv/${curr.id}/info`} key={curr.id}>
						<IndividualView
							title={curr.name}
							image={`https://image.tmdb.org/t/p/w500/${curr.poster_path}`}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default TvTrending;
