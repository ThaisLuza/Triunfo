import React, { Component } from 'react';
import propTypes from 'prop-types';
import '../style/Form.css';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="formulario">
        <h1>Adicionar nova carta</h1>
        <label htmlFor="nomeInput">
          Nome
          <input
            name="cardName"
            id="nomeInput"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="descricaoInput">
          Descrição
          <textarea
            name="cardDescription"
            id="descricaoInput"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1Input">
          Atributo 1
          <input
            name="cardAttr1"
            id="attr1Input"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            max={ 90 }
            min={ 1 }
          />
        </label>
        <label htmlFor="attr2Input">
          Atributo 2
          <input
            name="cardAttr2"
            id="attr2Input"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            max={ 90 }
            min={ 1 }
          />
        </label>
        <label htmlFor="attr3Input">
          Atributo 3
          <input
            name="cardAttr3"
            id="attr3Input"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            max={ 90 }
            min={ 1 }
          />
        </label>
        <label htmlFor="imageInput">
          Imagem
          <input
            name="cardImage"
            id="imageInput"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rareInput">
          Raridade
          <select
            name="cardRare"
            id="rareInput"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <div>
          { hasTrunfo ? (<span>Você já tem um Super Trunfo em seu baralho</span>)
            : (
              <label htmlFor="trunfoInput">
                Super Trybe Trunfo
                <input
                  name="cardTrunfo"
                  id="trunfoInput"
                  type="checkbox"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>)}
        </div>
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
