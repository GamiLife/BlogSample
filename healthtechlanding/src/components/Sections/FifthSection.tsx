import { Section } from '../../layouts/Section/Section';
import { Informative } from '../../layouts/Informative';
import { Image } from '../../components/ui/Image';
import { Text } from '../../components/ui/Text';

import styles from './Sections.styles';
import { useLandingBotStore } from '../../store';

export const FifthSection = () => {
  const botUrlSender = useLandingBotStore((state) => state.botUrlSender);

  return (
    <Section>
      <Section.Information>
        <Informative>
          <div className={styles.sectionInformativeCSS}>
            <Informative.Title as="h2">
              Siéntete libre. Finalmente, todo se trata de ti.
            </Informative.Title>
            <div>
              <div className={styles.fifthSectionTitleCSS}>
                <Text
                  text="Estamos construyendo el futuro de la salud"
                  level="base"
                />
              </div>
              <Informative.Description>
                Combinamos la tecnología y los servicios médicos a través de
                datos e Inteligencia Artificial para una mejor toma de
                decisiones
              </Informative.Description>
            </div>
            <div>
              <div className={styles.fifthSectionTitleCSS}>
                <Text text="Nuestra IA ayuda a tu médico" level="base" />
              </div>

              <Informative.Description>
                Tu médico estará enterado de tus ultimos movimientos para una
                futura evaluación en base a datos para acompañarte en el viaje
              </Informative.Description>
            </div>
          </div>
          <Informative.Action link={botUrlSender}>
            Comenzar a Cuidarme
          </Informative.Action>
        </Informative>
      </Section.Information>
      <Section.VisualExample>
        <Image
          src="/assets/section-five.png"
          alt="Section Five"
          width={380}
          height={427}
        />
      </Section.VisualExample>
    </Section>
  );
};
