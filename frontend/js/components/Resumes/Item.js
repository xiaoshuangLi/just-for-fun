import React, { Component } from 'react'

import { Slowshow } from '../animation'

export default class Item extends Slowshow {
  constructor(props) {
    super(props)
  }

  render(){
  	const { children, click} = this.props;

  	return(
      <div className="resume-item" onClick={click}>
        {children}
      </div>
  	)
  }
}