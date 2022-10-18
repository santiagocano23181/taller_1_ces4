import styles from '../styles/Imagen.module.css';

const Imagen = ({ link }) => {
	return (
		<>
			<img
				src={link}
				alt=''
				className={styles.imagen}
			/>
		</>
	);
};

export default Imagen;
