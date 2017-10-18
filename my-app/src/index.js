import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Welcome from './App';
import Another from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Another/>,document.getElementById('root'));

registerServiceWorker();
