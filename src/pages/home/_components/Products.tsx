import React, { useState, useEffect } from 'react';

import { ProductCard } from './ProductCard';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5173/lista_produto')
        // .then(response => response.json())
        const data = await response.json();
        console.log(data)
        setProducts(data.products);
      } catch (error) {
        console.error('erro diabo', error);
      }
    };

    fetchData();
  }, []);

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductCard key={index} productName={product.productName} descriptionShort={product.descriptionShort} photo={product.photo} price={product.price} />
            ))}
        </div>
    );
};

export default ProductList;