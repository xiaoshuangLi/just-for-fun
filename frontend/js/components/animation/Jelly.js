import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { TweenMax } from 'gsap'

export default class Jelly extends Component {
  constructor(props) {
    super(props)
  }

  componentWillEnter(cb){
    const el = findDOMNode(this)
    TweenMax.from(el, 1, {
      ease: Elastic.easeOut.config(1, 0.6), 
      css: { scale: 0 },
      onComplete: cb
    })
  }

  componentWillLeave(cb){
    const el = findDOMNode(this);
    TweenMax.to(el, 0.3, {
      opacity:  0,
      onComplete: cb
    })
  }

  render() {
    return <div>Just for bug.</div>
  }
}