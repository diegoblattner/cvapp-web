import '@babel/polyfill';
import { h, render } from 'preact';
import { App } from './components/App/component';

console.log('tried to render...');

render(<App />, document.getElementById('app-container'));
