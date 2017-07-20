import React from 'react';
import { render } from 'react-dom';
// import ReactDom from 'react-dom'; - unneccessary in this case because we don't need the whole package.
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker'; //need relative path because otherwise Webpack thinks to look in the node modules directory if it is just a string; don't need the .js on the end - assumed.
import NotFound from './components/NotFound';

const Root = () => {
  // you can put Matches anywhere in your application, even 4-5 levels deep
  // because this BrowserRouter is the parent of absolutely everything in our whole application, it actually is possible to surface React Router at any component down through it 
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker}/>
        <Match pattern="/store/:storeId" component={App}/>
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
