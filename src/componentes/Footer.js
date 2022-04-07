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
										area-label="icono para incresar a home"
									/>
								)}
								{mobile && (
									<HomeIcon
										color="primary"
										area-label="icono para incresar a home"
									/>
								)}
							</li>
						</Link>
						<Link to="/movie">
							<li>
								{mobile && (
									<VideocamIcon
										color="primary"
										area-label="icono para ingresar a peliculas"
									/>
								)}
								{!mobile && (
									<VideocamIcon
										fontSize="large"
										area-label="icono para ingresar a peliculas"
									/>
								)}
							</li>
						</Link>
						<Link to="/tv">
							<li>
								{mobile && (
									<LiveTvIcon
										color="primary"
										area-label="icono para ingresa a series"
									/>
								)}
								{!mobile && (
									<LiveTvIcon
										fontSize="large"
										area-label="icono para ingresa a series"
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
