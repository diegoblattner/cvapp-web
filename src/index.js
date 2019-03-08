import '@babel/polyfill';
import { h, render } from 'preact';
import { App } from './components/App/component';

render(<App />, document.getElementById('app-container'));
