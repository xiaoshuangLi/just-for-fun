import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { TweenMax } from 'gsap'

import Common from './Common'

export default class Jelly extends Common {
  constructor(props) {
    super(props)
  }

  aIn(cb){
    const el = findDOMNode(this)
    TweenMax.from(el, 1, {
      ease: Elastic.easeOut.config(1, 0.6), 
      css: { scale: 0 },
      onComplete: cb
    })
  }

  aOut(cb){
    const el = findDOMNode(this);
    TweenMax.to(el, 0.3, {
      opacity:  0,
      onComplete: cb
    })
  }
}