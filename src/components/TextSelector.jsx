import classNames from 'classnames';
import times from 'lodash.times';
import React, { Component, PropTypes } from 'react';

import './TextSelector.scss';

export default class TextSelector extends Component {
  constructor(props) {
    super(props);
    this.props = {
      amount: 0,
      unit: null,
    };
    this.handleHoverOut = this.handleHoverOut.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleHover(index, unit) {
    this.props.onHoverSelection({ amount: index + 1, unit });
  }

  handleHoverOut() {
    this.props.onHoverSelection({ amount: 0, unit: null });
  }

  handleClick() {
    this.props.onClickSelection();
  }

  renderWords() {
    return times(5, index => {
      const highlighted = (this.props.unit === ('word') && this.props.amount >= index + 1);
      const className = classNames('TextSelector-wordsButton', { 'TextSelector-selected': highlighted });
      return (
        <button className={className} key={index} onMouseOver={this.handleHover.bind(this, index, 'word')} onFocus={this.handleHover.bind(this, index, 'word')} onClick={this.handleClick}>
          <span className="show-for-sr">{`${index + 1} word`}</span>
        </button>
      );
    });
  }

  renderSentences() {
    return times(5, index => {
      const highlighted = (this.props.unit === 'sentence' && this.props.amount >= index + 1);
      const className = classNames('TextSelector-sentencesButton', { 'TextSelector-selected': highlighted });
      return (
        <button className={className} key={index} onMouseOver={this.handleHover.bind(this, index, 'sentence')} onFocus={this.handleHover.bind(this, index, 'sentence')} onClick={this.handleClick}>
          <span className="show-for-sr">{`${index + 1} word`}</span>
        </button>
      );
    });
  }

  renderParagraphs() {
    return times(5, index => {
      const highlighted = (this.props.unit === 'paragraph' && this.props.amount >= index + 1);
      const className = classNames('TextSelector-paragraphsButton', { 'TextSelector-selected': highlighted });
      return (
        <button className={className} key={index} onMouseOver={this.handleHover.bind(this, index, 'paragraph')} onFocus={this.handleHover.bind(this, index, 'paragraph')} onClick={this.handleClick}>
          <span className="show-for-sr">{`${index + 1} paragraph`}</span>
        </button>
      );
    });
  }

  render() {
    return (
      <div className="TextSelector" onMouseLeave={this.handleHoverOut}>
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
  amount: PropTypes.number,
  onClickSelection: PropTypes.func.isRequired,
  onHoverSelection: PropTypes.func.isRequired,
  unit: PropTypes.string,
};

TextSelector.defaultProps = {
  onClickSelection: () => {},
  onHoverSelection: () => {},
};
