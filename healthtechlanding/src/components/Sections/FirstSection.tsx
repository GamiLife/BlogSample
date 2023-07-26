import { Section } from '../../layouts/Section/Section';
import { Informative } from '../../layouts/Informative';
import { Image } from '../../components/ui/Image';

import { ServicesPill } from '../../components/ServicesPill';

import styles from './Sections.styles';
import { useLandingBotStore } from '../../store';

export const FirstSection = () => {
  const botUrlSender = useLandingBotStore((state) => state.botUrlSender);

  return (
    <div>
      <Section>
        <Section.Information>
          <Informative>
            <div className={styles.sectionInformativeCSS}>
              <Informative.Title>
                Elige tu bienestar de la mejor manera
              </Informative.Title>
              <Informative.Description>
                Atención médica completa basados en IA para brindar una atención
                personalizada con expertos en control de azúcar y seguimiento
              </Informative.Description>
            </div>
            <Informative.Action link={botUrlSender}>
              Comenzar a Cuidarme
            </Informative.Action>
          </Informative>
        </Section.Information>
        <Section.VisualExample>
          <Image
            src="/assets/section-one.png"
            alt="Section One"
            width={340}
            height={250}
          />
        </Section.VisualExample>
      </Section>

      <div className={styles.firstSectionServicePillCSS}>
        <ServicesPill />
      </div>
    </div>
  );
};
