import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ carrito }) => {
    const [cantidad, setCantidad] = useState(0)
    useEffect(() => {
      if(carrito === undefined){
        setCantidad(0)
      }else{
        setCantidad(carrito.length)
      }
    }, [carrito])
    
	return (
		<div className={styles.header}>
			<div className={styles.titulo_div}>
				<p className={styles.titulo}>Taller 1</p>
			</div>
			<div className={styles.boton_div}>
				<button className={styles.boton}><FaShoppingCart/> {cantidad} Products</button>
			</div>
		</div>
	);
};

export default Header;
