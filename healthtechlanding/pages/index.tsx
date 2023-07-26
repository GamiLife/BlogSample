import type { NextPage } from 'next';
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
    <div className="flex flex-col gap-20 md:gap-24">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </div>
  );
};

export default WithLayout(Home);
