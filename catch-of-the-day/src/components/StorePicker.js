import React from 'react';

class StorePicker extends React.Component {
  render() {
    // return React.createElement('p', {className: 'Testing'}, 'I love you');
    return (
      <form className="store-selector">
        {/* This is how you put a comment inside JSX */}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name"/>
        <button type="submit">Visit Store ➔</button>
      </form>
    )
    // You can only ever return one parent element in JSX, and you have to self-close your tags
  }
}

export default StorePicker;
