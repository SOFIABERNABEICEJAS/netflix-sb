import "../styles/_View-individual.scss";

const IndividualView = ({ title, image }) => {
	return (
		<div className="individual-view">
			<img src={image} alt={title} />
			<h3>{title} </h3>
		</div>
	);
};
export default IndividualView;
