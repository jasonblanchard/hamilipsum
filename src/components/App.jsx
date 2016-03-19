import { hashHistory } from 'react-router';
import React, { Component, PropTypes } from 'react';

import Dropdown from './Dropdown';
import hamilipsum from '../../lib/hamilipsum';
import TextSelector from './TextSelector';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      text: '',
    };
    this.handleClickSelectText = this.handleClickSelectText.bind(this);
    this.handleClickDropdown = this.handleClickDropdown.bind(this);
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
  }

  componentWillMount() {
    const { amount, unit } = this.props.params;
    if (amount && unit) {
      this.setState({
        text: hamilipsum.generate(amount, unit),
      });
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.params !== this.props.params) {
      const { amount, unit } = nextProps.params;
      this.setState({
        text: hamilipsum.generate(amount, unit),
      });
    }
  }

  handleCloseMenu() {
    this.setState({ showMenu: false });
  }

  handleClickDropdown(event) {
    event.stopPropagation();
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  handleClickSelectText(selection) {
    const { amount, unit } = selection;
    hashHistory.push(`${amount}/${unit}`);
  }

  render() {
    const { amount } = this.props.params;
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
            {amount ? this.state.text : null}
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
