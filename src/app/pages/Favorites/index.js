import React from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { ProductCard } from '../../components';
import shop from '../../../shop';

function Error() {
<<<<<<< HEAD
  return (
    <p>
      Ohhh, no! You don't have favorites{' '}
      <span role="img" aria-label="broken heart emoji">
        💔
      </span>
    </p>
  );
}
=======
  return <p>
    Ohhh, no! You don't have favorites{' '}
    <span role="img" aria-label="broken heart emoji">
      💔
          </span>
  </p>
}

function Favorites({ favorites, products = [], cart, ...restProps }) {
  const favoriteProducts = products.filter(product => favorites.includes(product.id));
>>>>>>> origin

function Favorites({ favorites, ...restProps }) {
  return (
    <div className="Favorites">
<<<<<<< HEAD
      {!favorites.length && <Error />}
      {favorites.map(data => {
        return <ProductCard {...restProps} {...data} key={data.id} />;
=======
      {!favoriteProducts.length && <Error />}
      {favoriteProducts.map(data => {
        const { count = 0 } = cart.find(({ id }) => id === data.id) || {};

        return (
          <ProductCard
            {...data}
            key={data.id}
            {...restProps}
            isFavorite
            cartCount={count}
          />
        );
>>>>>>> origin
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return { favorites: shop.selectors.getFavoriteProducts(state) };
}

export default connect(mapStateToProps)(Favorites);
