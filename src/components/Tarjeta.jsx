import styles from '../styles/Tarjeta.module.css';
import Boton from './boton';
import Imagen from './Imagen';

const Tarjeta = ({ producto, addProduct }) => {
	
	return (
		<>
			<div className={styles.tarjeta}>
				<Imagen link={producto[5]} />
				<div className={styles.info}>
					<h1 className={styles.nombre}>{producto[1]}</h1>
					<p className={styles.precio}>${producto[2]}</p>
					<Boton addProduct={addProduct} id={producto[0]} />
				</div>
			</div>
		</>
	);
};

export default Tarjeta;
