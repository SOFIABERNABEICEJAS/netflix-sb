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
								<HomeIcon fontSize="large" />
							</li>
						</Link>
						<Link to="/movie">
							<li>
								<VideocamIcon fontSize="large" />
							</li>
						</Link>
						<Link to="/tv">
							<li>
								<LiveTvIcon fontSize="large" />
							</li>
						</Link>
					</ul>
				</div>
			)}
		</div>
	);
};
export default Footer;
