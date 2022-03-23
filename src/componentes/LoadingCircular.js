import "../styles/LoadingCircular.scss";

const LoadingCircular = ({ isLoading }) => {
	return isLoading && <div className="loader"></div>;
};

export default LoadingCircular;
