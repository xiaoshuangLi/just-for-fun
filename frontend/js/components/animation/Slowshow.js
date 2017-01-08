import react, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { TweenMax } from 'gsap'

import { getStyles, timeout } from '../../common'

export default class Slowshow extends Component {
	constructor(props) {
		super(props)
	}

	componentWillEnter(cb){
		const el = findDOMNode(this)
		el.classList.add('opacity-active')

		let duration = getStyles(el, 'transitionDuration')
		duration = parseFloat(duration) * 1000

		timeout(() => {
			cb()
			el.style.opacity = 1
		}, duration)
	}

	componentWillLeave(cb) {
		const el = findDOMNode(this)

		TweenMax.to(el, .5, { 
			opacity: 0,
			onComplete: cb
		})
	}
}