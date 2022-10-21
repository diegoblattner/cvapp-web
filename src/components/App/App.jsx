import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import * as styles from './styles.module.scss';
import { loadCV } from '../../services/cv';
import { AppLoading } from './AppLoading';
import { AppError } from './AppError';
import { AppMain } from './AppMain';

export const App = ({ initialCvData }) => {
  const [cvData, setCvData] = useState(initialCvData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (!initialCvData) {
      loadCV().then((result) => {
        setCvData(result);
      }).catch((e) => {
        setError(e);
      }).finally(() => {
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <main className={styles.main}>
      {error && <AppError />}
      {isLoading && <AppLoading />}
      {!isLoading && !error && cvData && <AppMain cvData={cvData} />}
    </main>
  );
};
