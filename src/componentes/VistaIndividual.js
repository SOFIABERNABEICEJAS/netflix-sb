import "../styles/VistaIndividual.scss";

const VistaIndividual = ({ titulo, image }) => {
	return (
		<article className="vista-individual">
			<div className="cotenedor-ind-img">
				<img src={image} alt={titulo} />
			</div>
			<h3>{titulo}</h3>
		</article>
	);
};
export default VistaIndividual;
