import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

// analogous to HTML tags, you pass information to component tags via props; can name props whatever you want
class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App;
