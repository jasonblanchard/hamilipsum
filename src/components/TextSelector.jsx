import classNames from 'classnames';
import times from 'lodash.times';
import pluralize from 'pluralize';
import React, { Component, PropTypes } from 'react';

import './TextSelector.scss';

export default class TextSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      unit: null,
    };
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseOver(index, unit) {
    this.setState({ amount: index + 1, unit });
  }

  handleMouseLeave() {
    this.setState({ amount: 0, unit: null });
  }

  handleClick() {
    this.props.onClick(this.state);
  }

  renderWords() {
    return times(5, index => {
      const highlighted = (this.state.unit === ('word') && this.state.amount >= index + 1);
      const className = classNames('TextSelector-wordsButton', { 'TextSelector-selected': highlighted });
      return <button className={className} key={index} onMouseOver={this.handleMouseOver.bind(this, index, 'word')} onClick={this.handleClick}><span className="show-for-sr">{`${index + 1} word`}</span></button>;
    });
  }

  renderSentences() {
    return times(5, index => {
      const highlighted = (this.state.unit === 'sentence' && this.state.amount >= index + 1);
      const className = classNames('TextSelector-sentencesButton', { 'TextSelector-selected': highlighted });
      return <button className={className} key={index} onMouseOver={this.handleMouseOver.bind(this, index, 'sentence')} onClick={this.handleClick}><span className="show-for-sr">{`${index + 1} word`}</span></button>;
    });
  }

  renderParagraphs() {
    return times(5, index => {
      const highlighted = (this.state.unit === 'paragraph' && this.state.amount >= index + 1);
      const className = classNames('TextSelector-paragraphsButton', { 'TextSelector-selected': highlighted });
      return <button className={className} key={index} onMouseOver={this.handleMouseOver.bind(this, index, 'paragraph')} onClick={this.handleClick}><span className="show-for-sr">{`${index + 1} paragraph`}</span></button>;
    });
  }

  render() {
    const { amount, unit } = this.state;
    return (
      <div className="TextSelector" onMouseLeave={this.handleMouseLeave}>
        <span>{this.state.unit ? `${amount} ${pluralize(unit, amount)}` : 'Choose Amount'}</span>
        <div className="TextSelector-words">
          {this.renderWords()}
        </div>
        {this.renderSentences()}
        {this.renderParagraphs()}
      </div>
    );
  }
}

TextSelector.propTypes = {
  onClick: PropTypes.func,
};

TextSelector.defaultProps = {
  onClick: () => {},
};
