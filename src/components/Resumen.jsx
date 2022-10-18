import { useEffect, useState } from 'react';

const Resumen = ({ cupon, carrito, shipping }) => {
	const [total, setTotal] = useState(0);
	useEffect(() => {
		if (carrito !== undefined) {
			setTotal(
				carrito.reduce((acumulador, c) => {
					return (acumulador = acumulador + c[6] * c[2]);
				}, 0)
			);
		} else {
			setTotal(0);
		}
	}, [carrito]);

	return (
		<>
			<p className='titulo'>Summary</p>
			<hr />
			<div className='panel'>
				<h1 className='nombre medio'>ENTER COUPON CODE</h1>{' '}
				<p className='precio'>{cupon}</p>
			</div>
			<hr />
			<div className='panel'>
				<p className='nombre medio'>SUBTOTAL</p>{' '}
				<p className='precio'>${total}</p>
			</div>
			<div className='panel'>
				<p className='nombre medio'>SHIPPING</p>{' '}
				<p className='precio'>
					{shipping === 0 ? 'FREE' : '$' + shipping}
				</p>
			</div>
			<div className='panel'>
				<p className='nombre medio'>COUPON</p>{' '}
				<p className='precio'>${cupon}</p>
			</div>
			<hr />
			<div className='panel'>
				<p className='nombre titulo'>TOTAL</p>{' '}
				<p className='precio titulo'>${total + shipping - cupon}</p>
			</div>
		</>
	);
};

export default Resumen;
