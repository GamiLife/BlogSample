import NextImage from 'next/image';

export interface IImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export const Image: React.FC<IImage> = ({
  src,
  alt,
  width,
  height,
  caption,
}) => {
  return (
    <figure className="max-w-lg flex">
      <NextImage
        className="h-auto max-w-full rounded-lg"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      {caption && (
        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
