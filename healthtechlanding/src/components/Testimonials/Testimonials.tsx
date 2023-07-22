import { Slider } from '../Slider';
import { Testimonial } from './Testimonial';

export const Testimonials = () => {
  return (
    <Slider arrows>
      <Testimonial
        src="/assets/testimonial1.png"
        alt="Testimonio Uno"
        testimonia={`“Supé que hacer en momentos difíciles y me alivié de los problemas”`}
      />
      <Testimonial
        src="/assets/testimonial2.png"
        alt="Testimonio Dos"
        testimonia={`“Es increíble lo que hago ahora. Omití la movilidad y tengo excelentes días”`}
      />
      <Testimonial
        src="/assets/testimonial3.png"
        alt="Testimonio Tres"
        testimonia={`“Ahorre tiempo y dinero, evité trámites y ahora tomo decisiones”`}
      />
    </Slider>
  );
};
