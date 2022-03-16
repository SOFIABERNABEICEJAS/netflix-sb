import "../styles/View-individual.scss";

const IndividualView = ({ title, image }) => {
	return (
		<article className="individual-view">
			<img src={image} alt={title} />
			<h3>{title}</h3>
		</article>
	);
};
export default IndividualView;
