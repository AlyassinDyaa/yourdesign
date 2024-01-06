import React, { useState, useEffect } from 'react';
import "./Gallery.css";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch gallery data from the JSON file
    fetch('./Data/galleryData.json')
      .then((response) => response.json())
      .then((data) => setGalleryData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to open the gallery with a specific image index
  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  // Function to close the gallery
  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  // Function to navigate to the next image
  const nextImage = () => {
    if (currentImageIndex < galleryData.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  // Function to navigate to the previous image
  const previousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div>
      <header>
        <h1>
          Your Design <br />
          <span>[ Portfolio Gallery ]</span>
        </h1>
      </header>

      <div id="top"></div>
      <section className="gallery">
        <div className="row">
          <ul>
            <a href="#" className="close"></a>
            {galleryData.map((item, index) => (
              <li key={index}>
                <a href={`#item${index + 1}`} onClick={() => openGallery(index)}>
                  <img src={item.image} alt={item.title} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {isGalleryOpen && (
          <div className="gallery-modal">
            <div className="modal-content">
              <span className="close-button" onClick={closeGallery}>
                &times;
              </span>
              <img src={galleryData[currentImageIndex].image} alt={galleryData[currentImageIndex].title} />
              <div className="modal-description">
                <h1>{galleryData[currentImageIndex].title}</h1>
                <p>{galleryData[currentImageIndex].description}</p>
              </div>
              <div className="navigation">
                <button onClick={previousImage} disabled={currentImageIndex === 0}>
                  Previous
                </button>
                <button onClick={nextImage} disabled={currentImageIndex === galleryData.length - 1}>
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {galleryData.map((item, index) => (
          <div key={index} id={`item${index + 1}`} className="port">
            <div className="row">
              <div className="description">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gallery;
