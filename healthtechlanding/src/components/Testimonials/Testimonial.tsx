import { Image } from '../ui/Image';
import { Text } from '../ui/Text';

import styles from './Testimonial.styles';

export interface ITestimonial {
  src: string;
  alt: string;
  testimonia: string;
}

export const Testimonial: React.FC<ITestimonial> = ({
  src,
  alt,
  testimonia,
}) => {
  return (
    <div className={styles.TestimonialCSS}>
      <Image src={src} alt={alt} width={150} height={210} />
      <Text text={testimonia} level="base" className="text-center" />
    </div>
  );
};
