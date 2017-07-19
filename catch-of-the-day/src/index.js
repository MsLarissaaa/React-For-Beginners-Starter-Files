import React from 'react';
import { render } from 'react-dom';
// import ReactDom from 'react-dom'; - unneccessary in this case because we don't need the whole package.
import StorePicker from './components/StorePicker'; //need relative path because otherwise Webpack thinks to look in the node modules directory if it is just a string; don't need the .js on the end - assumed.


render(<StorePicker/>, document.querySelector('#main'));
