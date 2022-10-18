import styles from '../styles/Tarjeta.module.css';
import Imagen from './Imagen';

const ProductoCliente = ({ carritoProducto, modifyProduct }) => {
	return (
		<div className={styles.carrito}>
			<Imagen link={carritoProducto[5]} />
			<div className={styles.info}>
				<h1 className={styles.nombre}>{carritoProducto[1]}</h1>
				<p className={styles.descripcion}>{carritoProducto[4]}</p>
				<p className={styles.precio}>${carritoProducto[2]}</p>
			</div>
			<div className={styles.cantidad}>
				<input
					type='number'
					className={styles.numero}
					value={carritoProducto[6]}
					onChange={(env) => {
						modifyProduct(carritoProducto[0], env);
					}}
				/>
			</div>
		</div>
	);
};

export default ProductoCliente;
