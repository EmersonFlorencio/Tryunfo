import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      newCards: [],
    };
  }

  ValidateButton = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const minAtributo = 0;
    const maxAtributo = 90;
    const sum = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));
    const total = 210;

    if (
      cardName !== '' && cardDescription !== '' && cardImage !== ''
      && (Number(cardAttr1) >= minAtributo && Number(cardAttr1) <= maxAtributo)
      && (Number(cardAttr2) >= minAtributo && Number(cardAttr2) <= maxAtributo)
      && (Number(cardAttr3) >= minAtributo && Number(cardAttr3) <= maxAtributo)
      && sum <= total) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.ValidateButton());
  }

  onSaveButtonClick = (e) => {
    e.preventDefault();

    const card = { ...this.state };
    if (card.cardTrunfo === true) {
      this.setState({
        hasTrunfo: true });
    }
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare } = this.state;

    const obj = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare };

    this.setState((prevCard) => ({
      newCards: [
        ...prevCard.newCards,
        obj,
      ],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: true,
      isSaveButtonDisabled: true,
    }));
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
      hasTrunfo,
      newCards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
        />
        {newCards.map((e) => (
          <div key={ e.cardName }>
            <Card
              cardName={ e.cardName }
              cardDescription={ e.cardDescription }
              cardAttr1={ e.cardAttr1 }
              cardAttr2={ e.cardAttr2 }
              cardAttr3={ e.cardAttr3 }
              cardImage={ e.cardImage }
              cardRare={ e.cardRare }
              cardTrunfo={ e.cardTrunfo }
            />
          </div>))}
      </div>
    );
  }
}

export default App;
