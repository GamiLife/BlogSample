/* eslint-disable react/display-name */
import { Header } from '../layouts/Header';
import { Fragment } from 'react';
import { Main } from '../layouts/Main';
import { Footer } from '../layouts/Footer';

export const WithLayout =
  <P extends object>(WrapperComponent: React.ComponentType) =>
  (props: P) => {
    return (
      <Fragment>
        <Header />
        <Main>
          <WrapperComponent {...props} />
        </Main>
        <Footer />
      </Fragment>
    );
  };
