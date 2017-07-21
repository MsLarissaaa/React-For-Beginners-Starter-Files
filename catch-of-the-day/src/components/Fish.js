import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {
    const { details } = this.props;
    // ^ ES6 destructuring == const details = this.props.details;
    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name} />
        {/* ^If you are setting an attribute of a tag to be something that is a variable, you do not need quotes there. */}
        <h3 className="fish-name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button>Add to Order</button>
      </li>
    )
  }
}

export default Fish;
