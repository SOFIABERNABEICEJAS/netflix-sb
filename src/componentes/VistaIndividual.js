import "../styles/_vista-individual.scss";

const VistaIndividual = ({ titulo, imagen }) => {
	return (
		<div className="vista-individual">
			<img className="img-vista-indivudual" src={imagen} />
			<h1>{titulo} </h1>
		</div>
	);
};
export default VistaIndividual;
