import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const ImageSlider = () => {
  const images = [
    {
      src: 'assets/img/offer_img_1.jpg',
      caption: 'First Slide',
      description: 'This is the first slide description.'
    },
    {
      src: 'assets/img/offer_img_3.jpg',
      caption: 'Second Slide',
      description: 'This is the second slide description.'
    },
    {
      src: 'assets/img/offer_img_3.jpg',
      caption: 'Third Slide',
      description: 'This is the third slide description.'
    }
  ];

  const imgStyle = {
    height: '300px',
    objectFit: 'cover',
  };

  return (
    <div>
    <h4>Summer Sale Is Live</h4>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index} interval={1000}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={`Slide ${index + 1}`}
              style={imgStyle}
            />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
              <p>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
