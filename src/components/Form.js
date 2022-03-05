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
        <div className="form">
          <h1>Adicionar nova carta</h1>
          <div>
            <label htmlFor="nomeInput">
              <div>Nome</div>
              <input
                name="cardName"
                id="nomeInput"
                className="border1"
                type="text"
                data-testid="name-input"
                value={ cardName }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div>
            <label htmlFor="descricaoInput">
              <div>Descrição</div>
              <textarea
                name="cardDescription"
                id="descricaoInput"
                className="border1"
                data-testid="description-input"
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div>
            <label htmlFor="attr1Input">
              Atributo 1
              <input
                name="cardAttr1"
                id="attr1Input"
                className="border2"
                type="number"
                data-testid="attr1-input"
                value={ cardAttr1 }
                onChange={ onInputChange }
                max={ 90 }
                min={ 1 }
              />
            </label>
          </div>
          <div>
            <label htmlFor="attr2Input">
              Atributo 2
              <input
                name="cardAttr2"
                id="attr2Input"
                className="border2"
                type="number"
                data-testid="attr2-input"
                value={ cardAttr2 }
                onChange={ onInputChange }
                max={ 90 }
                min={ 1 }
              />
            </label>
          </div>
          <div>
            <label htmlFor="attr3Input">
              Atributo 3
              <input
                name="cardAttr3"
                id="attr3Input"
                className="border2"
                type="number"
                data-testid="attr3-input"
                value={ cardAttr3 }
                onChange={ onInputChange }
                max={ 90 }
                min={ 1 }
              />
            </label>
          </div>
          <div>
            <label htmlFor="imageInput">
              Imagem
              <input
                name="cardImage"
                id="imageInput"
                className="border2"
                type="text"
                data-testid="image-input"
                value={ cardImage }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <label htmlFor="rareInput">
            Raridade
            <select
              name="cardRare"
              id="rareInput"
              className="border1"
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
                    className="border3"
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
        </div>
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
