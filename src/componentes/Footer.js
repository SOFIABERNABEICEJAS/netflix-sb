import HomeIcon from "@mui/icons-material/Home";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Link } from "react-router-dom";
import "../styles/Footer.scss";

const Footer = () => {
	const mobile = window.innerWidth < 600;
	return (
		<div className="footer">
			{mobile && (
				<div className="footer-iconos-nav">
					<ul>
						<Link to="/">
							<li>
								{!mobile && (
									<HomeIcon
										fontSize="large"
										aria-label="icono para incresar a secciom home"
									/>
								)}
								{mobile && (
									<HomeIcon aria-label="icono para incresar a seccion home" />
								)}
							</li>
						</Link>
						<Link to="/movie">
							<li>
								{mobile && (
									<VideocamIcon aria-label="icono para ingresar a seccion peliculas" />
								)}
								{!mobile && (
									<VideocamIcon
										fontSize="large"
										aria-label="icono para ingresar a seccion peliculas"
									/>
								)}
							</li>
						</Link>
						<Link to="/tv">
							<li>
								{mobile && (
									<LiveTvIcon aria-label="icono para ingresa a seccion series" />
								)}
								{!mobile && (
									<LiveTvIcon
										fontSize="large"
										aria-label="icono para ingresa a seccion series"
									/>
								)}
							</li>
						</Link>
					</ul>
				</div>
			)}
		</div>
	);
};
export default Footer;
