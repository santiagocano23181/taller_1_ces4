import Tarjeta from './Tarjeta';
import styles from '../styles/Productos.module.css';

const Productos = ({ productos, carrito, setCarrito }) => {
	const addProduct = id => {
        let p = [];
		const elemento = carrito.filter(c => {
			return c[0] === id;
		});
		
		if (elemento !== undefined && elemento.length > 0) {
			p = carrito.map(c => {
				if (c[0] === id) {
					if (c[6] < c[3]) {
						c[6] = c[6] + 1;
					}
				}
				return c;
			});
		} else {
			p = [...carrito];
			const product = productos.filter(p => {
				if (p[0] === id) {
					return true;
				}
				return false;
			});
            const product2 = product[0];
            product2.push(1)
			p.push(product2);
		}
		setCarrito(p);
	};
	return (
		<div className={styles.lista}>
			{productos.map(p => {
				return (
					<Tarjeta producto={p} key={p[0]} addProduct={addProduct} />
				);
			})}
		</div>
	);
};

export default Productos;
