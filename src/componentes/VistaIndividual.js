import "../styles/VistaIndividual.scss";

const VistaIndividual = ({ title, image }) => {
	return (
		<article className="vista-individual">
			<div className="cotenedor-ind-img">
				<img src={image} alt={title} />
			</div>
			<h3>{title}</h3>
		</article>
	);
};
export default VistaIndividual;
