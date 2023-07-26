import { Section } from '../../layouts/Section/Section';
import { Informative } from '../../layouts/Informative';

import { Testimonials } from '../../components/Testimonials';

import styles from './Sections.styles';

export const SecondSection = () => {
  return (
    <Section>
      <Section.Information>
        <Informative>
          <div className={styles.sectionInformativeCSS}>
            <Informative.Title as="h2">
              <span className="text-primary">Experiencia única </span>
              para los que quieren cuidar su salud de verdad
            </Informative.Title>
            <Informative.Description>
              Todos nos cuidamos. Estamos contigo 24/7 junto a un experto en tu
              control y seguimiento de diabetes y tratamientos.
            </Informative.Description>
          </div>
          <Informative.Action>Comenzar a Cuidarme</Informative.Action>
        </Informative>
      </Section.Information>
      <Section.VisualExample>
        <Testimonials />
      </Section.VisualExample>
    </Section>
  );
};
