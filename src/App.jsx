import { useState } from 'react';
import Calculo from './components/Calculo';
import Header from './components/Header';
import Productos from './components/Productos';
import styles from './styles/App.module.css';

function App() {
	const productos = [
		[
			'1u',
			'Nike Dunk High Retro',
			120,
			5,
			'Really good Nike shoes',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/608d6f2b-f6eb-4a5f-8535-6f24b081e011/dunk-high-retro-zapatillas-tjf3hZ.png',
		],
		[
			'2u',
			'Nike Zoom Fly 5',
			150,
			3,
			'good Nike shoes',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cdb4e7b0-7772-41aa-82c0-4306f53050b6/zoom-fly-5-zapatillas-de-running-carretera-6PMLS5.png',
		],
		[
			'3u',
			'Nike Streetgato',
			180,
			2,
			'Really Nike shoes',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c526742e-8259-44bd-a37e-d27cf4e29194/streetgato-botas-de-futbol-zhWVgz.png',
		],
		[
			'4u',
			'Zoom Freak 4',
			150,
			3,
			'Really good Nike shoes',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dd30bba7-ae65-4fc3-975c-454f9b8d7ddd/zoom-freak-4-zapatillas-de-baloncesto-8Hdw9M.png',
		],
	];
  const [carrito, setCarrito] = useState([])
	return (
		<div className={styles.container}>
			<Header carrito={carrito}/>
			<hr />
			<Productos productos={productos} carrito={carrito} setCarrito={setCarrito}/>
			<hr />
			<Calculo carrito={carrito} setCarrito={setCarrito} productos={productos}/>
		</div>
	);
}

export default App;
