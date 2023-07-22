import classNames from 'classnames';
import { Text } from '../../components/ui/Text';

import styles from './Information.module.css';

export const Information = () => {
  return (
    <div className="flex flex-wrap gap-10 md:gap-20">
      <ul
        className={classNames(
          'flex',
          'flex-col',
          'gap-3',
          styles.informationHeader
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
          'flex',
          'flex-col',
          'gap-3',
          styles.informationHeader
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
