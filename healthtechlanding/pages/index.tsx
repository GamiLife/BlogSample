import type { NextPage } from 'next';
import { Fragment } from 'react';
import Head from 'next/head';

import { WithLayout } from '../src/hocs/WithLayout';

import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
} from '../src/components/Sections';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Anna - Nuestro Asistente virtual</title>
        <link rel="icon" href="/assets/brand.jpeg" sizes="any" />
        <meta
          name="description"
          content="Anna es un asistente virtual destinado para brinar una guia medica y derivarte segun tu diagnostico a nuestros medicos especializados o general"
          key="desc"
        />
        <meta property="og:title" content="Anna nuestro asistente Virtual" />
        <meta
          property="og:description"
          content="Anna es un asistente virtual destinado para brinar una guia medica y derivarte segun tu diagnostico a nuestros medicos especializados o general"
        />
      </Head>

      <div className="flex flex-col gap-20 md:gap-24">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </div>
    </Fragment>
  );
};

export default WithLayout(Home);
