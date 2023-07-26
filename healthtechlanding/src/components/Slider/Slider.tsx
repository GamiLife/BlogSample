import SlickSlider from 'react-slick';

export interface ISlider {
  slidesToShow?: number;
  slidesToScroll?: number;
  slidesToShowSm?: number;
  slidesToScrollSm?: number;
  slidesToShowMd?: number;
  slidesToScrollMd?: number;
  dots?: boolean;
  arrows: boolean;
  children: React.ReactNode;
}

export const Slider: React.FC<ISlider> = ({
  slidesToScroll = 3,
  slidesToShow = 3,
  slidesToScrollMd = 2,
  slidesToShowMd = 2,
  slidesToScrollSm = 1,
  slidesToShowSm = 1,
  dots = false,
  arrows = true,
  children,
}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    dots,
    arrows,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slidesToShowMd,
          slidesToScroll: slidesToScrollMd,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: slidesToShowSm,
          slidesToScroll: slidesToScrollSm,
        },
      },
    ],
  };

  return <SlickSlider {...settings}>{children}</SlickSlider>;
};
