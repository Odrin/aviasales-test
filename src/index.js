import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';
import 'moment/locale/ru';
import './styles/index.css';
import App from './components/App';

moment.locale('ru');

ReactDOM.render(<App />, document.getElementById('root'));
