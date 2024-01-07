import React, { useState } from 'react';
import './Store.css';
import { motion } from 'framer-motion';
import C1 from "../../Assets/Images/products/c1.jpg"
import C1H from "../../Assets/Images/products/c11.jpg"
import C2 from "../../Assets/Images/products/c2.jpg"
import C2H from "../../Assets/Images/products/c22.jpg"

const Store = () => {
  const [searchValue, setSearchValue] = useState('');

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      subtitle: 'Product 1 Subtitle',
      price: '$10',
      image: C1,
      hoverImage: C1H,
      isHovered: false
    },
    {
      id: 2,
      name: 'Product 2',
      subtitle: 'Product 2 Subtitle',
      price: '$20',
      image: C2,
      hoverImage: C2H,
      isHovered: false
    },
  ]);

  const filteredProducts = searchValue
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : products;

  const handleHover = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          isHovered: true
        }
      }
      return product;
    });

    setProducts(updatedProducts);
  };

  const handleMouseLeave = () => {
    const updatedProducts = products.map((product) => ({
      ...product,
      isHovered: false
    }));

    setProducts(updatedProducts);
  };

  const handleEmailButtonClick = (product) => {
    const subject = product.name;
    const message = `Price: ${product.price}\nSubtitle: ${product.subtitle}`;
    const email = 'dyaa@gmail.com';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
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
          {filteredProducts.length > 0 ? filteredProducts.map((product) => (
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
            <div className='card'>
              <img className='card__image' src={require('../../Assets/placeholder.jpg').default} alt='No Results' />
              <div className='card__content'>
                <h2 className='card__title'>No Results</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    )}

export default Store;