import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// https://developer.mozilla.org/ko/docs/Web/CSS/@media
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
