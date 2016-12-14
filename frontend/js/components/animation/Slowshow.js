import react, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { TweenMax } from 'gsap'

export default class Slowshow extends Component {
	constructor(props) {
		super(props)
	}

	componentWillEnter(cb){
		const el = findDOMNode(this)
		TweenMax.to(el, .5, { 
			opacity: 1,
			onComplete: cb
		})
	}

	componentWillLeave(cb) {
		const el = findDOMNode(this)

		TweenMax.to(el, .5, { 
			opacity: 0,
			onComplete: cb
		})
	}
}