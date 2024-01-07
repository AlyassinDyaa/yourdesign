import React, { useState, useEffect } from 'react';
import './Store.css';
import { motion } from 'framer-motion';

const Store = () => {
  const [searchValue, setSearchValue] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./Data/productData.json') // Update this to the correct path
      .then(response => response.json())
      .then(data => {
        // Add isHovered property to each product
        const productsWithHover = data.map(product => ({
          ...product,
          isHovered: false
        }));
        setProducts(productsWithHover);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredProducts = searchValue
    ? products.filter(product =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : products;

  const handleHover = (id) => {
    const updatedProducts = products.map(product => 
      product.id === id ? { ...product, isHovered: true } : product
    );
    setProducts(updatedProducts);
  };

  const handleMouseLeave = () => {
    const updatedProducts = products.map(product => ({
      ...product,
      isHovered: false
    }));
    setProducts(updatedProducts);
  };

  const handleEmailButtonClick = (product) => {
    const subject = `${product.name} Purchase`;
    const body = `I am interested in purchasing: ${product.name}\n\nProduct Details:\n${product.subtitle}\nPrice: ${product.price}\n]`;
    const mailtoLink = `mailto:dyaa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <div id='canvas' className='container__canvas'>
      <h1 className='container__canvas-title'>OUR COLLECTION</h1>

      {/* <motion.div 
        className='search-bar'
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchValue} 
          onChange={(e) => setSearchValue(e.target.value)} 
        />
      </motion.div> */}

      <div className='card_wrapper'>
        <div className='card__container'>
          {filteredProducts.length > 0 ? filteredProducts.map(product => (
            <div
              key={product.id}
              className='card'
              onMouseEnter={() => handleHover(product.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className='card__image'
                src={product.isHovered ? product.hoverImage : product.image}
                alt={product.name}
              />
              <div className='card__content'>
                <h2 className='card__title'>{product.name}</h2>
                <p className='card__subtitle'>{product.subtitle}</p>
                <p className='card__price'>{product.price}</p>
                <button className='btn-canvas' onClick={() => handleEmailButtonClick(product)}>Contact</button>
              </div>
            </div>
          )) : (
            <div className='no-results'>No Results Found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Store;
