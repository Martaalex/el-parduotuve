import React from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { Loader, ProductCard } from '../../components';
import shop from '../../../shop';

<<<<<<< HEAD
function Products({ isLoading, error, products }) {
=======
function Products({
  isLoading,
  error,
  products = [],
  favorites,
  cart,
  ...restProps
}) {
>>>>>>> origin
  return (
    <div className="Products">
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {products.map(data => {
<<<<<<< HEAD
        return <ProductCard {...data} key={data.id} />;
=======
        const { count = 0 } = cart.find(({ id }) => id === data.id) || {};

        return (
          <ProductCard
            {...restProps}
            {...data}
            key={data.id}
            isFavorite={favorites.includes(data.id)}
            cartCount={count}
          />
        );
>>>>>>> origin
      })}
    </div>
  );
}

const enhance = connect(state => ({
  products: shop.selectors.getProducts(state),
  error: shop.selectors.getProductsError(state),
  isLoading: shop.selectors.isLoadingProducts(state),
}));

export default enhance(Products);
