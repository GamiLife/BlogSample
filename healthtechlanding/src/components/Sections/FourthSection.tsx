import { Section } from '../../layouts/Section/Section';
import { Informative } from '../../layouts/Informative';
import { Image } from '../../components/ui/Image';

import styles from './Sections.styles';
import { useLandingBotStore } from '../../store';

export const FourthSection = () => {
  const botUrlSender = useLandingBotStore((state) => state.botUrlSender);

  return (
    <Section id="acerca-de">
      <Section.VisualExample>
        <Image
          src="/assets/section-four.png"
          alt="Section Four"
          width={524}
          height={405}
        />
      </Section.VisualExample>
      <Section.Information>
        <Informative>
          <div className={styles.sectionInformativeCSS}>
            <Informative.Title as="h2">
              Entiende como mejorar tu calidad de vida
            </Informative.Title>
            <Informative.Description>
              Ten tu análisis de riesgo. Toma decisiones en tu atención
              personalizada y ten un seguimiento 24/7 para tus control de
              glucosa. Agenda citas con tu doctor y tratamientos.
            </Informative.Description>
          </div>
          <Informative.Action link={botUrlSender}>
            Comenzar a Cuidarme
          </Informative.Action>
        </Informative>
      </Section.Information>
    </Section>
  );
};
