/* eslint no-use-before-define: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import App from './App';
import './index.scss';
import '@atlaskit/css-reset';
import en from './locale/en';
import ko from './locale/ko';

const defaultLang = localStorage.getItem('lang') || 'en';
let message;

if (defaultLang === 'ko') {
    message = ko;
} else {
    message = en;
}

ReactDOM.render(
    <React.StrictMode>
        <IntlProvider locale={defaultLang} messages={message}>
            <App />
        </IntlProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
