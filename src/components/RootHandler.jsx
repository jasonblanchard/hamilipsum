import React, { Component } from 'react';

export default class RootHandler extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
