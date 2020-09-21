import React from 'react';
import ReactDOM from 'react-dom';

// Generate required css
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// https://github.com/oblador/react-native-vector-icons#web-with-webpack
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
