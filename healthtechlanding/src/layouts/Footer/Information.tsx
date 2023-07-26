import classNames from 'classnames';
import { Text } from '../../components/ui/Text';

import styles from './Footer.styles';
import stylesCSS from './Information.module.css';

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
          <Text text="Acerca de nosotros" level="base" className="text-sm" />
        </li>
        <li>
          <Text text="Equipo Médico" level="base" className="text-sm" />
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
          <Text
            text="Mejoremos la plataforma juntos"
            level="base"
            className="text-sm"
          />
        </li>
        <li>
          <Text
            text="Términos y Condiciones"
            level="base"
            className="text-sm"
          />
        </li>
      </ul>
    </div>
  );
};
