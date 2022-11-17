import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import style from './Products.module.css';

const Products = ({ products }) => {
	return (
		<div className={style.mainContainer}>
			{products?.map((product, i) => (
				<ProductCard
					key={i}
					id={product.id}
					name={product.name}
					price={product.price}
					description={product.description}
					img={product.img}
				/>
			))}
		</div>
	);
};

export default Products;
