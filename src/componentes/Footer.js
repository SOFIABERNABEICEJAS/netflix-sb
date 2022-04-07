import HomeIcon from "@mui/icons-material/Home";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Link } from "react-router-dom";
import "../styles/Footer.scss";

const Footer = () => {
	const mobile = window.innerWidth < 600;
	return (
		<footer className="footer">
			{mobile && (
				<div className="footer-iconos-nav">
					<ul>
						<Link to="/">
							<li>
								<HomeIcon
									fontSize="large"
									aria-label="icono para incresar a secciom home"
								/>
							</li>
						</Link>
						<Link to="/movie">
							<li>
								<VideocamIcon
									fontSize="large"
									aria-label="icono para ingresar a seccion peliculas"
								/>
							</li>
						</Link>
						<Link to="/tv">
							<li>
								<LiveTvIcon
									fontSize="large"
									aria-label="icono para ingresa a seccion series"
								/>
							</li>
						</Link>
					</ul>
				</div>
			)}
		</footer>
	);
};
export default Footer;
