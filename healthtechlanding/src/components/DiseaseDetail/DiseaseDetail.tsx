import { Image } from '../ui/Image';
import { Text } from '../ui/Text';

import styles from './DiseasDetail.styles';

export const Pointer = () => (
  <div>
    <div className={styles.detailPointCSS}></div>
  </div>
);

export const DiseaseDetail = () => {
  return (
    <div className={styles.diseaseDetailCSS}>
      <div className={styles.diseaseFrontPageCSS}>
        <div className={styles.frontPageTextCSS}>
          <Text as="h3" level="lg" text="Diabetes" fontWeight="bold" />
        </div>
        <div className={styles.frontPageImageCSS}>
          <Image src="/assets/diabetes.png" alt="" width={200} height={513} />
        </div>
      </div>

      <div className={styles.detailCSS}>
        <ul className={styles.detailListCSS}>
          <li className={styles.detailListItemCSS}>
            <Pointer />
            <Text
              level="base"
              text="Atención virtual con tu médico. Brindamos información relevante para que te cuide con totalidad"
            />
          </li>
          <li className={styles.detailListItemCSS}>
            <Pointer />
            <Text
              level="base"
              text="Exámemes y tratamientos a domicilio
              ( Hemoglobina, Seguimiento de Glucosa, Orina, entre otros)"
            />
          </li>
          <li className={styles.detailListItemCSS}>
            <Pointer />
            <Text
              level="base"
              text="Seguimiento y atención de urgencia 24/7. Flexibilidad en tu plan"
            />
          </li>
          <li className={styles.detailListItemCSS}>
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
