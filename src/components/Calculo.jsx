import '../styles/Calculo.css';
import ProductoCliente from './ProductoCliente';
import Resumen from './Resumen';

const Calculo = ({ carrito, setCarrito }) => {
	const cupon = 10;
	const shipping = 0;
	const modifyProduct = (id, env) => {
		let p = [];
		const valor = env.target.value;
		if (valor === '0') {
			p = carrito.filter(c => {
				return c[0] !== id;
			});
		} else {
			p = carrito.map(c => {
				if (c[0] === id) {
					if (valor <= c[3]) {
						c[6] = env.target.value;
					}
				}
				return c;
			});
		}
		setCarrito(p);
	};
	return (
		<div className='panel'>
			<div className='lista'>
				<p className='titulo'>Shopping cart</p>
				<hr />
				<div>
					{carrito.map(c => {
						return (
							<ProductoCliente
								carritoProducto={c}
								key={c[0]}
								modifyProduct={modifyProduct}
							/>
						);
					})}
				</div>
			</div>
			<div className='resumen'>
				<Resumen cupon={cupon} carrito={carrito} shipping={shipping} />
			</div>
		</div>
	);
};

export default Calculo;
