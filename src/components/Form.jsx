import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome:
          <input
            type="text"
            data-testid="name-input"
            name="nome"
            id="name-input"
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input
            type="textarea"
            data-testid="description-input"
            name="description"
            id="description-input"
          />
        </label>

        <label htmlFor="attr1-input">
          Atributo1:
          <input
            type="number"
            data-testid="attr1-input"
            name="attr1"
            id="attr1-input"
          />
        </label>

        <label htmlFor="attr2-input">
          Atributo2:
          <input
            type="number"
            data-testid="attr2-input"
            name="attr2"
            id="attr2-input"
          />
        </label>

        <label htmlFor="attr3-input">
          Atributo3:
          <input
            type="number"
            data-testid="attr3-input"
            name="attr3"
            id="attr3-input"
          />
        </label>

        <label htmlFor="image-input">
          Image:
          <input
            type="text"
            data-testid="image-input"
            name="image"
            id="image-input"
          />
        </label>

        <label htmlFor="rare-input">
          Tipo:
          <select
            data-testid="rare-input"
            name="type"
            type="select"
            id="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          Nome:
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="checked"
            id="trunfo-input"
          />
        </label>
        <button
          type="submit"
          data-testid="save-button"
        >
          salvar
        </button>
      </form>
    );
  }
}

export default Form;
