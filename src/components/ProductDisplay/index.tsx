import React from 'react';
import { Product } from '../../types';

type Props = {
  product?: Product | Record<string, any>;
};

const ProductDisplay = ({ product }: Props): JSX.Element | null => {
  if (!product) return null;
  const { name, id, description, price, rating } = product;
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>{name}</h3>
      <p>Price: $ {price}</p>
      <p>{description}</p>
      <p>ID: {id}</p>
      <p>Latest rating: {rating}</p>
    </div>
  );
};

export default ProductDisplay;
