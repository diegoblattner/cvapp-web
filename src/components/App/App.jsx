import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import './styles.scss';
import { loadCV } from '../../services/cv';
import { AppLoading } from './AppLoading';
import { AppError } from './AppError';
import { AppMain } from './AppMain';

const ui = {
  loading: 'loading',
  loaded: 'loaded',
  error: 'error',
};

const UIStates = {
  [ui.loading]() {
    return <AppLoading />;
  },
  [ui.loaded](cvData) {
    return <AppMain cvData={cvData} />;
  },
  [ui.error]() {
    return <AppError />;
  },
};

export const App = () => {
  const [uiState, setUiState] = useState(ui.loading);
  const [cvData, setCvData] = useState({});

  useEffect(async () => {
    const result = await loadCV();
    setCvData(result);
    setUiState(result ? ui.loaded : ui.error);
  }, []);

  return UIStates[uiState](cvData);
};
