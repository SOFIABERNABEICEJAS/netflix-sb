import error404 from "../assets/error.png";
import "../styles/Error404.scss";

const Error404 = () => {
	return (
		<div className="contenedor-error404">
			<div className="contenedor-error404-img">
				<img src={error404} alt="ERRROR 404"></img>
			</div>
		</div>
	);
};
export default Error404;
