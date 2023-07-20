import NextImage from 'next/image';

export interface IImage {
  src: string;
  alt: string;
}

export const Image: React.FC<IImage> = ({ src, alt }) => {
  return (
    <figure className="max-w-lg">
      <NextImage className="h-auto max-w-full rounded-lg" src={src} alt={alt} />
      <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
        Image caption
      </figcaption>
    </figure>
  );
};
