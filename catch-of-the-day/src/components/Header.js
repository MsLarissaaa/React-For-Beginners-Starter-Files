import React from 'react';

// with props, 'this' refers to the actual component, props is an object with attributes that we can access; can use this.props anywhere inside the render method and it will be made available
// if you're just rendering HTML, and don't require any other methods/functions besides render, it doesn't need to be a whole class, can instead be a variable function
// can remove 'this.' from props once it's not bound to any class/object anymore and props are being passed in directly

const Header = (props) => {
  return (
    <header className="top">
    <h1>
    Catch
    <span className="ofThe">
    <span className="of">of</span>
    <span className="the">the</span>
    </span>
    Day
    </h1>
    <h3 className="tagline"><span>{props.tagline}</span></h3>
    </header>
  )
}

// Warnings regarding invalid prop types are only in development - won't see them if you push to production
Header.propTypes = {
  tagline: React.PropTypes.string.isRequired
}

export default Header;
