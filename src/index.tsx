import { h, render } from 'preact';
import { App } from './components/App/App';

const init = () => {
  render(<App />, document.getElementById('app-container')!);
};

init();
