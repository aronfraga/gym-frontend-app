import React from 'react';
import HeaderBtn from '../HeaderBtn/HeaderBtn';
import ContainerFilters from '../ContainerFilters/ContainerFilters';
import NavBar from '../NavBar/NavBar';
import Products from '../Products/Products';
import style from './Shop.module.css';

const products = [
	{
		id: 1,
		name: 'Proteían xy',
		price: '50.00',
		description:
			'Lorem ipsum dolor sit amet consectetur. Sit pellentesque viverra dui tortor et. In mauris tempor amet facilisi a enim vel nec. Pellentesque porta sapien quam ornare dolor tellus id consectetur.Lorem ipsum dolor sit amet consectetur. Sit pellentesque viverra dui tortor et. In mauris tempor amet facilisi a enim vel nec. Pellentesque porta sapien quam ornare dolor tellus id consectetur.',
		img: 'https://copservir.vtexassets.com/arquivos/ids/760267-1200-auto?v=637928621257630000&width=1200&height=auto&aspect=true',
	},
	{
		id: 2,
		name: 'Proteían xy',
		price: '50.00',
		description:
			'Lorem ipsum dolor sit amet consectetur. Sit pellentesque viverra dui tortor et. In mauris tempor amet facilisi a enim vel nec. Pellentesque porta sapien quam ornare dolor tellus id consectetur.Lorem ipsum dolor sit amet consectetur. Sit pellentesque viverra dui tortor et. In mauris tempor amet facilisi a enim vel nec. Pellentesque porta sapien quam ornare dolor tellus id consectetur.',
		img: 'https://copservir.vtexassets.com/arquivos/ids/760267-1200-auto?v=637928621257630000&width=1200&height=auto&aspect=true',
	},
	{
		id: 3,
		name: 'Proteían xy',
		price: '50.00',
		description:
			'Lorem ipsum dolor sit amet consectetur. Sit pellentesque viverra dui tortor et. In mauris tempor amet facilisi a enim vel nec. Pellentesque porta sapien quam ornare dolor tellus id consectetur.Lorem ipsum dolor sit amet consectetur. Sit pellentesque viverra dui tortor et. In mauris tempor amet facilisi a enim vel nec. Pellentesque porta sapien quam ornare dolor tellus id consectetur.',
		img: 'https://copservir.vtexassets.com/arquivos/ids/760267-1200-auto?v=637928621257630000&width=1200&height=auto&aspect=true',
	},
	{
		id: 4,
		name: 'Proteían xy',
		price: '50.00',
		description:
			'Lorem ipsum dolor sit amet consectetur. Sit pellentesque viverra dui tortor et. In mauris tempor amet facilisi a enim vel nec. Pellentesque porta sapien quam ornare dolor tellus id consectetur.Lorem ipsum dolor sit amet consectetur. Sit pellentesque viverra dui tortor et. In mauris tempor amet facilisi a enim vel nec. Pellentesque porta sapien quam ornare dolor tellus id consectetur.',
		img: 'https://copservir.vtexassets.com/arquivos/ids/760267-1200-auto?v=637928621257630000&width=1200&height=auto&aspect=true',
	},
	{
		id: 5,
		name: 'Proteían xy',
		price: '50.00',
		description:
			'Lorem ipsum dolor sit amet consectetur. Sit pellentesque viverra dui tortor et. In mauris tempor amet facilisi a enim vel nec. Pellentesque porta sapien quam ornare dolor tellus id consectetur.Lorem ipsum dolor sit amet consectetur. Sit pellentesque viverra dui tortor et. In mauris tempor amet facilisi a enim vel nec. Pellentesque porta sapien quam ornare dolor tellus id consectetur.',
		img: 'https://copservir.vtexassets.com/arquivos/ids/760267-1200-auto?v=637928621257630000&width=1200&height=auto&aspect=true',
	},
	{
		id: 6,
		name: 'Proteían xy',
		price: '50.00',
		description:
			'Lorem ipsum dolor sit amet consectetur. Sit pellentesque viverra dui tortor et. In mauris tempor amet facilisi a enim vel nec. Pellentesque porta sapien quam ornare dolor tellus id consectetur.Lorem ipsum dolor sit amet consectetur. Sit pellentesque viverra dui tortor et. In mauris tempor amet facilisi a enim vel nec. Pellentesque porta sapien quam ornare dolor tellus id consectetur.',
		img: 'https://copservir.vtexassets.com/arquivos/ids/760267-1200-auto?v=637928621257630000&width=1200&height=auto&aspect=true',
	},
	{
		id: 7,
		name: 'Proteían xy',
		price: '50.00',
		description:
			'Lorem ipsum dolor sit amet consectetur. Sit pellentesque viverra dui tortor et. In mauris tempor amet facilisi a enim vel nec. Pellentesque porta sapien quam ornare dolor tellus id consectetur.Lorem ipsum dolor sit amet consectetur. Sit pellentesque viverra dui tortor et. In mauris tempor amet facilisi a enim vel nec. Pellentesque porta sapien quam ornare dolor tellus id consectetur.',
		img: 'https://copservir.vtexassets.com/arquivos/ids/760267-1200-auto?v=637928621257630000&width=1200&height=auto&aspect=true',
	},
	{
		id: 8,
		name: 'Proteían xy',
		price: '50.00',
		description:
			'Lorem ipsum dolor sit amet consectetur. Sit pellentesque viverra dui tortor et. In mauris tempor amet facilisi a enim vel nec. Pellentesque porta sapien quam ornare dolor tellus id consectetur.Lorem ipsum dolor sit amet consectetur. Sit pellentesque viverra dui tortor et. In mauris tempor amet facilisi a enim vel nec. Pellentesque porta sapien quam ornare dolor tellus id consectetur.',
		img: 'https://copservir.vtexassets.com/arquivos/ids/760267-1200-auto?v=637928621257630000&width=1200&height=auto&aspect=true',
	},
];

const allFilters = [
	{
		title: 'Productos',
		filters: ['Suplementos', 'Entrenamiento', 'Accesorios', 'Prendas'],
	},
	{
		title: 'Precio',
		filters: [
			'menos de 50.00',
			'50.00 - 100.00',
			'100.00 - 200.00',
			'Más de 200.00',
		],
	},
];

const Shop = () => {
	return (
		<div>
			<NavBar />
			<div className={style.mainContainer}>
				<ContainerFilters filters={allFilters} />
				<div className={style.cardsContainer}>
					<HeaderBtn title={'Tienda virtual'} />
					<Products products={products} />
				</div>
			</div>
		</div>
	);
};

export default Shop;
