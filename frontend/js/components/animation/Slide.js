import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { TweenLite } from 'gsap'

import Common from './Common'

export default class Slide extends Common {
  constructor(props) {
    super(props)
  }

  aIn(cb){
    const el = findDOMNode(this)
    TweenLite.fromTo(el, 0.5, {
      x: '100%',
    },{
      x: '0%',
      onComplete: cb
    })
  }

  aOut(cb){
    const el = findDOMNode(this);
    TweenLite.to(el, 0.5, {
      x: '100%',
      onComplete: cb
    })
  }
}