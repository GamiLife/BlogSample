import { Section } from '../../layouts/Section/Section';
import { Informative } from '../../layouts/Informative';

import { DiseaseDetail } from '../../components/DiseaseDetail';

import styles from './Sections.styles';

export const ThirdSection = () => {
  return (
    <Section id="para-ti">
      <Section.VisualExample>
        <DiseaseDetail />
      </Section.VisualExample>
      <Section.Information>
        <Informative>
          <div className={styles.sectionInformativeCSS}>
            <Informative.Title as="h2">
              Situaciones que cambian vidas. Hazlo de manera simple
            </Informative.Title>
            <Informative.Description>
              Vivir con diabetes no tiene porque ser díficil. Hazlo con
              prevención. Tener un equipo de salud inteligente que te ayuda a
              estar más feliz.
            </Informative.Description>
          </div>
          <Informative.Action>Comenzar a Cuidarme</Informative.Action>
        </Informative>
      </Section.Information>
    </Section>
  );
};
