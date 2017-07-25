import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
// one way to allow methods to refer to this within the class; other way is adding .bind(this) to end of method when it's called; third way is to add an arrow function as below in render form
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();
    // first grab the text from the box
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    // second we're going to transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  // ES6 class functions do NOT have commas after them
  render() {
    // return React.createElement('p', {className: 'Testing'}, 'I love you');
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}> {/* This won't work well if you're rendering multiple StorePickers on a page - use other methods described above */}
        {/* This is how you put a comment inside JSX */}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }}/>
        <button type="submit">Visit Store ➔</button>
      </form>
    )
    // You can only ever return one parent element in JSX, and you have to self-close your tags
  }
}

// surface the router from the parent with contextTypes to allow us to use transitionTo
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
