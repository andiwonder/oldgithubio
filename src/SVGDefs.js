import React, { Component } from 'react';

export default class InsetShadow extends Component {
  render() {
    return (
      <defs>
        <filter id={this.props.id}>
          <feOffset dx="0" dy="0"/>
          <feGaussianBlur is stdDeviation={this.props.stdDeviation} result="offset-blur"/>
          <feComposite is operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
          <feFlood is flood-color={this.props.floodColor} flood-opacity={this.props.floodOpacity} result="color"/>
          <feComposite is operator="in" in="color" in2="inverse" result="shadow"/>
          <feComposite is operator="over" in="shadow" in2="SourceGraphic"/>
        </filter>
      </defs>
    );
  }
}

window.InsetShadow=InsetShadow;