import Image from 'next/image';
import { MediaImageType } from 'types';
import { useMediaQuery } from 'react-responsive';
import styles from '@styles/ImageGallery.module.sass';

interface Props {
  images: MediaImageType[];
}

const ImageGallery = ({ images }: Props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 675px)' });

  return (
    <div className={styles.gallery}>
      {images.map((image, i) => {
        const imageData = {
          src: isMobile && image.mobileImg ? image.mobileImg.src : image.src,
          height:
            isMobile && image.mobileImg ? image.mobileImg.height : image.height,
          width:
            isMobile && image.mobileImg ? image.mobileImg.width : image.width,
        };
        return (
          <span key={i}>
            <Image {...imageData} alt={image.alt} />
          </span>
        );
      })}
    </div>
  );
};

export default ImageGallery;
