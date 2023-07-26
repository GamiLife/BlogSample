import classNames from 'classnames';
import { Text } from '../../components/ui/Text';

import styles from './Footer.styles';
import stylesCSS from './Information.module.css';
import Link from 'next/link';
import {
  ABOUT_US,
  IMPROVE_OUR_PLATFORM_TOGETHER,
  MEDICAL_TEAM,
  TERMS_CONDITIONS,
} from '../../constants';

export const Information = () => {
  return (
    <div className={styles.InformationCSS}>
      <ul
        className={classNames(
          styles.InformationListCSS,
          stylesCSS.informationHeader
        )}
        aria-label="Compañía"
      >
        <li>
          <Link href={ABOUT_US} target="_blank">
            <a target="_blank">
              <Text
                text="Acerca de nosotros"
                level="base"
                className="text-sm"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href={MEDICAL_TEAM} target="_blank">
            <a target="_blank">
              <Text text="Equipo Médico" level="base" className="text-sm" />
            </a>
          </Link>
        </li>
      </ul>

      <ul
        className={classNames(
          styles.InformationListCSS,
          stylesCSS.informationHeader
        )}
        aria-label="Apoyo"
      >
        <li>
          <Link href={IMPROVE_OUR_PLATFORM_TOGETHER} target="_blank">
            <a target="_blank">
              <Text
                text="Mejoremos la plataforma juntos"
                level="base"
                className="text-sm"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href={TERMS_CONDITIONS} target="_blank">
            <a target="_blank">
              <Text
                text="Términos y Condiciones"
                level="base"
                className="text-sm"
              />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
