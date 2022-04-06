import "../styles/View-individual.scss";

const IndividualView = ({ title, image }) => {
	return (
		<article className="individual-view">
			<div className="conteiner-ind-img">
				<img src={image} alt={title} />
			</div>
			<h3>{title}</h3>
		</article>
	);
};
export default IndividualView;
