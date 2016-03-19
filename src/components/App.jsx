import { hashHistory } from 'react-router';
import React, { Component, PropTypes } from 'react';

import Dropdown from './Dropdown';
import TextSelector from './TextSelector';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.handleClickSelectText = this.handleClickSelectText.bind(this);
    this.handleClickDropdown = this.handleClickDropdown.bind(this);
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
  }

  handleClickSelectText(selection) {
    const { amount, unit } = selection;
    hashHistory.push(`${amount}/${unit}`);
  }

  handleClickDropdown(event) {
    event.stopPropagation();
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  handleCloseMenu() {
    this.setState({ showMenu: false });
  }

  render() {
    const { amount, unit } = this.props.params;
    return (
      <div className="App" onClick={this.handleCloseMenu}>
        <h1>Hamil Ipsum</h1>
        <div className="subtitle">
          Sourced from the writings of
        </div>
        <div className="large-subtitle">Alexander Hamilton</div>
        <div role="main">
          {amount ? <Dropdown isOpen={this.state.showMenu} onClick={this.handleClickDropdown}><TextSelector onClick={this.handleClickSelectText} /></Dropdown> : <TextSelector onClick={this.handleClickSelectText} />}
          <div>
            {amount ? `Generate ${amount} ${unit}` : null}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  params: PropTypes.object,
};

export default App;
