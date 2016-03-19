import { hashHistory } from 'react-router';
import pluralize from 'pluralize';
import React, { Component, PropTypes } from 'react';
import './App.scss';

import TextSelector from './TextSelector';

class App extends Component {
  handleClickSelectText(selection) {
    const { amount, unit } = selection;
    hashHistory.push(`${amount}/${unit}`);
  }

  render() {
    const { amount, unit } = this.props.params;
    return (
      <div className="App-mainContent">
        <h1>Hamil Ipsum</h1>
        <div className="subtitle">
          Sourced from the writings of
        </div>
        <div className="large-subtitle">Alexander Hamilton</div>
        <div>
          {amount ? null : <TextSelector onClick={this.handleClickSelectText} />}
          Generate {amount} {unit}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  params: PropTypes.object,
};

export default App;
