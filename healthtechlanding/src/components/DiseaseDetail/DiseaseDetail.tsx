import { Image } from '../ui/Image';
import { Text } from '../ui/Text';

import classNames from 'classnames';

export interface IDiseaseDetail {}

export const Pointer = () => (
  <div>
    <div className="flex rounded-full bg-primary my-2 w-[10px] h-[10px]"></div>
  </div>
);

export const DiseaseDetail = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap gap-3">
      <div className="rounded-lg relative w-full min-w-max sm:w-fit">
        <div className="py-5 px-5 sm:absolute top-0 z-[3] rounded-lg bg-[#EFFFDA] w-full shadow-lg">
          <Text as="h3" level="lg" text="Diabetes" fontWeight="bold" />
        </div>
        <div className="hidden sm:block">
          <Image src="/assets/diabetes.png" alt="" width={200} height={513} />
        </div>
      </div>

      <div className="bg-[#EFFFDA] rounded-lg shadow-lg">
        <ul className={classNames('flex', 'flex-col', 'gap-5', 'p-5')}>
          <li className="flex gap-3">
            <Pointer />
            <Text
              level="base"
              text="Atención virtual con tu médico. Brindamos información relevante para que te cuide con totalidad"
            />
          </li>
          <li className="flex gap-3">
            <Pointer />
            <Text
              level="base"
              text="Exámemes y tratamientos a domicilio
              ( Hemoglobina, Seguimiento de Glucosa, Orina, entre otros)"
            />
          </li>
          <li className="flex gap-3">
            <Pointer />
            <Text
              level="base"
              text="Seguimiento y atención de urgencia 24/7. Flexibilidad en tu plan"
            />
          </li>
          <li className="flex gap-3">
            <Pointer />
            <Text
              level="base"
              text="Fácil de gestionar desde tu hogar y donde estés"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
