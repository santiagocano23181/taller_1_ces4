import styles from '../styles/Boton.module.css';

const Boton = ({ addProduct, id }) => {
	return (
		<>
			<button
				className={styles.boton}
				onClick={() => {
					addProduct(id);
				}}
			>
				Add to Card
			</button>
		</>
	);
};

export default Boton;
