import react, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { TweenLite} from 'gsap'

import { getStyles, timeout, Animate} from '../../common'

export default class Slowshow extends Component {
	constructor(props) {
		super(props)
	}

	fadeIn(cb){
		const el = findDOMNode(this)

		el.classList.add('opacity-ani')
		let duration = getStyles(el, 'animateDuration')
		duration = parseFloat(duration) * 1000

		timeout(() => {
			cb && cb()
		}, duration)
	}

	componentWillEnter(cb){
		this.fadeIn(cb)
	}

	componentDidMount(cb){
		this.props.ready && this.fadeIn(cb)
	}

	componentWillLeave(cb) {
		const el = findDOMNode(this)

		TweenLite.to(el, .5, { 
			opacity: 0,
			onComplete: cb
		})
	}
}