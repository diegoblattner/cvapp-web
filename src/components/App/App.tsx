import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { loadCV } from '@services/cv';
import type { CVData } from '@types';
import { AppLoading } from './AppLoading';
import { AppError } from './AppError';
import { AppMain } from './AppMain';
import styles from './styles.module.scss';

type AppProps = {
  initialCvData?: CVData;
};

export const App = ({ initialCvData }: AppProps) => {
  const [cvData, setCvData] = useState(initialCvData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (!initialCvData) {
      loadCV()
        .then((result) => {
          setCvData(result);
        })
        .catch((e: string | undefined) => {
          setError(e);
        })
        .finally(() => {
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
