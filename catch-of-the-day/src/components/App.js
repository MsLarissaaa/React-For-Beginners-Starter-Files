import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

// analogous to HTML tags, you pass information to component tags via props; can name props whatever you want
class App extends React.Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    // get initial state
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    // update our state
    const fishes = {...this.state.fishes};
    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({ fishes })
    // ^same as this.setState({ fishes: fishes}) - ??? ES6
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
