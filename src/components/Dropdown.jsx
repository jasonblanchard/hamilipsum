import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

import './Dropdown.scss';

export default class Dropdown extends Component {
  renderMenu() {
    if (!this.props.isOpen) return null;
    return (
      <div className="Dropdown-menu">
        {this.props.children}
      </div>
    );
  }

  render() {
    const className = classNames('Dropdown', { isOpen: this.props.isOpen });
    return (
      <div className={className}>
        <button onClick={this.props.onClick}>Generate</button>
        {this.renderMenu()}
      </div>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

Dropdown.defaultProps = {
  isOpen: false,
  onClick: () => {},
};
