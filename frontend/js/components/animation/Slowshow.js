import react, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { TweenLite} from 'gsap'

import { getStyles, timeout, Animate} from '../../common'
import Common from './Common'

export default class Slowshow extends Common {
	constructor(props) {
		super(props)
	}

	aIn(cb){
		const el = findDOMNode(this)

		el.classList.add('opacity-ani')
		let duration = getStyles(el, 'animationDuration')
		duration = parseFloat(duration) * 1000

		timeout(() => {
			cb && cb()
		}, duration)
	}

	aOut(cb){
		const el = findDOMNode(this)

		TweenLite.to(el, .5, { 
			opacity: 0,
			onComplete: cb
		})
	}
}