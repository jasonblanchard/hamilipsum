import { hashHistory } from 'react-router';
import React, { Component, PropTypes } from 'react';

import Dropdown from './Dropdown';
import hamilipsum from '../../lib/hamilipsum';
import isEqual from 'lodash.isequal';
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
    this.setState({
      text: hamilipsum.generate(amount, unit),
    });
  }

  formatText(text) {
    const formattedText = text.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('');
    return {
      __html: formattedText,
    };
  }

  renderText() {
    if (!this.props.params.amount) return null;
    return <div className="App-text" dangerouslySetInnerHTML={this.formatText(this.state.text)} />;
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
          {amount ? <Dropdown isOpen={this.state.showMenu} onClick={this.handleClickDropdown} buttonText="Generate"><TextSelector onClick={this.handleClickSelectText} /></Dropdown> : <TextSelector onClick={this.handleClickSelectText} />}
          {this.renderText()}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  params: PropTypes.object,
};

export default App;
