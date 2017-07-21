import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {
    const { details, index } = this.props;
    // ^ ES6 destructuring === const details = this.props.details; const index = this.props.index
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add to Order' : 'Sold Out!';

    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name} />
        {/* ^If you are setting an attribute of a tag to be something that is a variable, you do not need quotes there. */}
        <h3 className="fish-name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button onClick={() => this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>
      </li>
    )
  }
}

// Sea Scallops by default are sold out, the rest are available/'Add to Order'

export default Fish;
