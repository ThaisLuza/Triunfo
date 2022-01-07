import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <input name="nome" id="nome" type="text" data-testid="name-input" />
        <textarea data-testid="description-input" />
      </form>
    );
  }
}

export default Form;
