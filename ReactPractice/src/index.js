import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './useState/App';
import Effect from './useEffect/Effect';

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
    <App />
    <Effect />
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);
