import classNames from 'classnames';
import NextImage from 'next/image';
import { useMemo } from 'react';

export interface IImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  hasShadow?: boolean;
}

export const Image: React.FC<IImage> = ({
  src,
  alt,
  width,
  height,
  caption,
  hasShadow = true,
}) => {
  const imageProps = useMemo(() => {
    return {
      width,
      height,
    };
  }, [width, height]);

  return (
    <figure
      className={classNames('max-w-lg flex rounded-[0.8rem]', {
        'shadow-lg': hasShadow,
      })}
    >
      <NextImage
        className="h-auto max-w-full"
        src={src}
        alt={alt}
        {...imageProps}
      />
      {caption && (
        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
