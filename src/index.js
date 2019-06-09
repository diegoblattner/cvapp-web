import '@babel/polyfill';
import { h, render } from 'preact';
import 'preact/debug'; // TODO import this in development mode only
import { App } from './components/App/App';

const init = () => {
  render(<App />, document.getElementById('app-container'));
};

init();
