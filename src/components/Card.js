import React, { Component } from 'react';
import propTypes from 'prop-types';
import '../style/Card.css';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="carta">
        <span className="espaco">
          {cardName && <h2 data-testid="name-card">{cardName}</h2>}
        </span>
        <img
          data-testid="image-card"
          alt={ cardName }
          src={ cardImage }
        />
        <p data-testid="description-card">{cardDescription}</p>
        <div className="atributos">
          <span data-testid="attr1-card">
            Atributo 1..........
            {cardAttr1}
          </span>
          <span data-testid="attr2-card">
            Atributo 2..........
            {cardAttr2}
          </span>
          <span data-testid="attr3-card">
            Atributo 3..........
            {cardAttr3}
          </span>
          <span data-testid="rare-card">
            Raridade:
            {' '}
            {cardRare}
          </span>
        </div>
        {cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span>}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};

export default Card;
