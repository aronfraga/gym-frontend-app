import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import style from './Products.module.css';

const Products = ({ products, render }) => {
	return (
		<div className={style.mainContainer}>
			{products?.map((product, i) => (
				<ProductCard
					key={i}
					id={product.id}
					title={product.title}
					unit_price={product.unit_price}
					description={product.description}
					picture_url={product.imgUrl}
					stock={product.stock}
					quantity={1}
					render={render}
				/>
			))}
		</div>
	);
};

export default Products;
