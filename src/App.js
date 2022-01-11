import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './style/App.css';
import foto from './images/imagem.webp';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: foto,
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      hasTrunfo: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButton = this.onSaveButton.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.superTrunfoValidation = this.superTrunfoValidation.bind(this);
  }

  onSaveButton() {
    const soma = 210;
    const max = 90;
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
    } = this.state;

    const validacao = (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardAttr1 !== ''
      && cardAttr2 !== ''
      && cardAttr3 !== ''
      && cardRare !== ''
      && (Number(cardAttr1) >= 0 && Number(cardAttr1) <= max)
      && (Number(cardAttr2) >= 0 && Number(cardAttr2) <= max)
      && (Number(cardAttr3) >= 0 && Number(cardAttr3) <= max)
      && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= soma)
    );

    this.setState({ isSaveButtonDisabled: !validacao });
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.onSaveButton);
  }

  onSaveButtonClick() {
    this.superTrunfoValidation();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const cardSave = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({ cards: [...prevState.cards, cardSave],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  }

  superTrunfoValidation() {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

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
      isSaveButtonDisabled,
      cards,
      hasTrunfo,
    } = this.state;
    return (
      <div>
        <main>
          <Form
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            hasTrunfo={ hasTrunfo }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <div className="preVisualizacao">
            <h1>Pré-visualização</h1>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </main>
        {cards.map((item) => (
          item ? <Card
            cardName={ item.cardName }
            cardDescription={ item.cardDescription }
            cardAttr1={ item.cardAttr1 }
            cardAttr2={ item.cardAttr2 }
            cardAttr3={ item.cardAttr3 }
            cardImage={ item.cardImage }
            cardRare={ item.cardRare }
            cardTrunfo={ item.cardTrunfo }
          /> : <> </>
        ))}
      </div>
    );
  }
}

export default App;
