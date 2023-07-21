import type { NextPage } from 'next';
import { WithLayout } from '../src/hocs/WithLayout';
import { Section } from '../src/layouts/Section/Section';
import { Informative } from '../src/layouts/Informative';
import { Image } from '../src/components/ui/Image';
import { Text } from '../src/components/ui/Text';
import { ServicesPill } from '../src/components/ServicesPill';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col gap-24">
      <div>
        <Section>
          <Section.Information>
            <Informative>
              <div className="flex flex-col gap-5">
                <Informative.Title>
                  Elige tu bienestar de la mejor manera
                </Informative.Title>
                <Informative.Description>
                  Atención médica completa basados en IA para brindar una
                  atención personalizada con expertos en control de azúcar y
                  seguimiento
                </Informative.Description>
              </div>
              <Informative.Action>Comenzar a Cuidarme</Informative.Action>
            </Informative>
          </Section.Information>
          <Section.VisualExample>
            <Image
              src="/assets/section-one.png"
              alt="Section One"
              width={250}
              height={200}
            />
          </Section.VisualExample>
        </Section>

        <div className="pt-5"></div>
        <ServicesPill />
      </div>

      <Section>
        <Section.Information>
          <Informative>
            <div className="flex flex-col gap-5">
              <Informative.Title as="h2">
                <span className="text-blue-600">Experiencia única </span>
                para los que quieren cuidar su salud de verdad
              </Informative.Title>
              <Informative.Description>
                Todos nos cuidamos. Estamos contigo 24/7 junto a un experto en
                tu control y seguimiento de diabetes y tratamientos.
              </Informative.Description>
            </div>
            <Informative.Action>Comenzar a Cuidarme</Informative.Action>
          </Informative>
        </Section.Information>
        <Section.VisualExample>
          <Image
            src="/assets/section-one.png"
            alt="Section One"
            width={250}
            height={200}
          />
        </Section.VisualExample>
      </Section>

      <Section>
        <Section.VisualExample>
          <Image
            src="/assets/section-four.png"
            alt="Section One"
            width={250}
            height={200}
          />
        </Section.VisualExample>
        <Section.Information>
          <Informative>
            <div className="flex flex-col gap-5">
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

      <Section>
        <Section.VisualExample>
          <Image
            src="/assets/section-four.png"
            alt="Section One"
            width={250}
            height={200}
          />
        </Section.VisualExample>
        <Section.Information>
          <Informative>
            <div className="flex flex-col gap-5">
              <Informative.Title as="h2">
                Entiende como mejorar tu calidad de vida
              </Informative.Title>
              <Informative.Description>
                Ten tu análisis de riesgo. Toma decisiones en tu atención
                personalizada y ten un seguimiento 24/7 para tus control de
                glucosa. Agenda citas con tu doctor y tratamientos.
              </Informative.Description>
            </div>
            <Informative.Action>Comenzar a Cuidarme</Informative.Action>
          </Informative>
        </Section.Information>
      </Section>

      <Section>
        <Section.Information>
          <Informative>
            <div className="flex flex-col gap-5">
              <Informative.Title as="h2">
                Siéntete libre. Finalmente, todo se trata de ti.
              </Informative.Title>
              <div>
                <Text
                  text="Estamos construyendo el futuro de la salud"
                  level="base"
                  underline="offset-8"
                />
                <Informative.Description>
                  Combinamos la tecnología y los servicios médicos a través de
                  datos e Inteligencia Artificial para una mejor toma de
                  decisiones
                </Informative.Description>
              </div>
              <div>
                <Text
                  text="Nuestra IA ayuda a tu médico"
                  level="base"
                  underline="offset-8"
                />
                <Informative.Description>
                  Tu médico estará enterado de tus ultimos movimientos para una
                  futura evaluación en base a datos para acompañarte en el viaje
                </Informative.Description>
              </div>
            </div>
            <Informative.Action>Comenzar a Cuidarme</Informative.Action>
          </Informative>
        </Section.Information>
        <Section.VisualExample>
          <Image
            src="/assets/section-five.png"
            alt="Section One"
            width={250}
            height={200}
          />
        </Section.VisualExample>
      </Section>
    </div>
  );
};

export default WithLayout(Home);
