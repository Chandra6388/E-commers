import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';



const ImageSlider = () => {
    const images = [
      {
        src: 'https://via.placeholder.com/800x400?text=First+Slide',
        caption: 'First Slide',
        description: 'This is the first slide description.'
      },
      {
        src: 'https://via.placeholder.com/800x400?text=Second+Slide',
        caption: 'Second Slide',
        description: 'This is the second slide description.'
      },
      {
        src: 'https://via.placeholder.com/800x400?text=Third+Slide',
        caption: 'Third Slide',
        description: 'This is the third slide description.'
      }
    ];
  
    return (
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index} interval={3000}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
              <p>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };