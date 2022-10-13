/* eslint-disable import/first */
// Must be the first import
if (process.env.NODE_ENV === 'development') {
  // Must use require here as import statements are only allowed
  // to exist at top-level.
  // eslint-disable-next-line global-require
  require('preact/debug');
}
import { h, render } from 'preact';
import { App } from './components/App/App';

const init = () => {
  render(<App />, document.getElementById('app-container'));
};

init();
