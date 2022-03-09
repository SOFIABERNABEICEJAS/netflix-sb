import "../styles/_view-individual.scss";

const IndividualView = ({ title, image, id }) => {
	return (
		<div className="individual-view">
			<img src={image} alt="{id}" />
			<h1>{title} </h1>
		</div>
	);
};
export default IndividualView;
