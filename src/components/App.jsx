import { Link, hashHistory } from 'react-router';
import pluralize from 'pluralize';
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
      hoverAmount: 0,
      hoverUnit: null,
    };
    this.handleClickSelection = this.handleClickSelection.bind(this);
    this.handleClickDropdown = this.handleClickDropdown.bind(this);
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
    this.handleHoverSelection = this.handleHoverSelection.bind(this);
  }


  componentWillMount() {
    const { amount, unit } = this.props.params;
    if (amount && unit) {
      this.setState({
        text: hamilipsum.generate(amount, unit),
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { amount, unit } = nextProps.params;
    if (!isEqual(this.props.params, nextProps.params)) {
      this.setState({
        text: hamilipsum.generate(amount, unit),
      });
    }
  }

  handleClickDropdown(event) {
    event.stopPropagation();
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  handleHoverSelection(selection) {
    this.setState({
      hoverUnit: selection.unit,
      hoverAmount: selection.amount,
    });
  }

  handleClickSelection() {
    const { hoverAmount: amount, hoverUnit: unit } = this.state;
    hashHistory.push(`${amount}/${unit}`);
    this.setState({
      text: hamilipsum.generate(amount, unit),
    });
  }

  handleCloseMenu() {
    this.setState({ showMenu: false });
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

  renderSelector() {
    return <TextSelector amount={this.state.hoverAmount} unit={this.state.hoverUnit} onClickSelection={this.handleClickSelection} onHoverSelection={this.handleHoverSelection} />;
  }

  renderSelectionLabel() {
    const { hoverUnit, hoverAmount } = this.state;
    return hoverUnit ? `${hoverAmount} ${pluralize(hoverUnit, hoverAmount)}` : 'Generate';
  }

  renderSelectMode() {
    const amount = this.props.params.amount;
    if (amount) {
      return (
        <Dropdown isOpen={this.state.showMenu} onClick={this.handleClickDropdown} buttonText={this.renderSelectionLabel()}>
          {this.renderSelector()}
        </Dropdown>
      );
    }
    return (
      <div className="App-initialSelectContainer">
        {this.renderSelectionLabel()}
        {this.renderSelector()}
      </div>
    );
  }

  render() {
    return (
      <div className="App" onClick={this.handleCloseMenu}>
        <h1>Hamil Ipsum</h1>
        <div className="subtitle">
          A random text generator sourced from the writings of
        </div>
        <div className="large-subtitle">Alexander Hamilton</div>
        <div role="main">
          {this.renderSelectMode()}
          {this.renderText()}
        </div>
        <div className="App-footer">
          <Link to="/about">Say what?</Link>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  params: PropTypes.object,
};

export default App;
