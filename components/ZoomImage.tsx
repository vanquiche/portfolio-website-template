import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface Props {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const ZoomImage = ({ src, width, height, alt }: Props) => {
  return (
    <Zoom>
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        layout='responsive'
        // objectFit='contain'
      />
    </Zoom>
  );
};

export default ZoomImage;
