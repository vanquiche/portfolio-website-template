import useWindowSize from '@hooks/useWindowSize';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import { MediaImageType } from 'types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import styles from '@styles/ImageGallery.module.sass'

interface Props {
  images: MediaImageType[];
  // images?: string[];
}

const ImageGallery = ({ images }: Props) => {
  const [slides, setSlides] = useState(1);
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  const settings = {
      dots: true,
      speed: 500,
      slidesToShow: slides,
    };


  useEffect(() => {
    if (typeof window !== 'undefined') {
      isMobile ? setSlides(1) : setSlides(2)
    }
  }, [isMobile]);

  return (
    <Slider {...settings} dotsClass={`slick-dots ${styles.dots}`}>
      {images.map((image, i) => {
        return (
          <Image
            key={i}
            src={image}

            // layout='responsive'
            objectFit='cover'
            height={image.height}
            width={image.height}
            alt={image.alt}
          />
        );
      })}
    </Slider>
  );
};

export default ImageGallery;
