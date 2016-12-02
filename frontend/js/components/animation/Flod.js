import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { TweenMax } from 'gsap'

export default class Flod extends Component {
	constructor(props) {
		super(props)
	}

	componentWillEnter(cb){
		const el = findDOMNode(this)
	}

	componentWillLeave(cb){
		const el = findDOMNode(this)
	}
}