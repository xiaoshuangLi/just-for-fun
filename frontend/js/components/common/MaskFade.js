import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import { getFromArr, timeout, getStyles} from '../../common'

const MaskFade = (ObjClass) => class extends ObjClass {
	init(){
		this.keyDown = this.keyDown.bind(this)
		this.touchStart = this.touchStart.bind(this)
		this.touchMove = this.touchMove.bind(this)
		this.touchEnd = this.touchEnd.bind(this)

    this.animating = false,
		this.start = {x: 0, y: 0}
    this.anis = ['fade-in', 'fade-in-reverse', 'fade-out', 'fade-out-reverse']
		this.keys = [
			{ val: 1, code: [39, 40]},
			{ val: -1, code: [37, 38]}
		]

		this.state = {
			animation: '',
			animationReverse: false,
			hide: false
		}
	}

	componentDidMount(){
		let ele = findDOMNode(this)
		ele.focus()
	}

	className(animation = 'fade-out', hide = true, animationReverse = false){
		this.setState({
			animation,
			animationReverse,
			hide
		})
	}

	animate(reverse = false, cb){
		let self = this
		let ele = findDOMNode(self.refs.container)
		let duration = parseFloat(getStyles(ele, 'animationDuration')) || 1

		self.className('fade-out', true, reverse)
		duration *= 1000

    timeout(function(){
    	cb&&cb();
			self.className('fade-in', false, reverse)
    }, duration)

    timeout(function(){
    	self.animating = false
			self.className('', false)
    }, duration * 2)
	}

	switch(index = 0) {
		if(!index) {
			return;
		}

		if(this.animating) {
			return;
		}
		this.animating = true
    
    const { actions, present } = this.props
		const { web, resumes } = this.props.present

		let list = resumes.filter(item => !item.hide)
		let curr = getFromArr(list, 'id', web.detail, true)
		let len = list.length

		curr = (index + curr + len)%len
		this.animate(index < 0, () => {
			actions.edit({detail: list[curr].id}, 'web')
		})
	}

	keyDown(e){
		let key = e.keyCode

		for(let v = 0, l = this.keys.length; v < l; v++) {
			let item = this.keys[v]
			if(!!~item.code.indexOf(key)) {
				this.switch(item.val)
			}
		}
	}

	touchStart(e){
		window.disableTouch = true
		this.start = {x: e.touches[0].clientX, y: e.touches[0].clientY}
	}

	touchEnd(e) {
		window.disableTouch = false
	}

	touchMove(e){
		const { start } = this
		let maxAngle = Math.sin(Math.PI/3)
		let end = {x: e.touches[0].clientX, y: e.touches[0].clientY}

		let currAngle = Math.abs(start.y - end.y)/Math.abs(start.x - end.y)
		this.start = end;

		if(currAngle > maxAngle) {
			return;
		}

		this.switch(start.x > end.x ? -1 : 1)
	}

	getClassName(defaultClassName = ''){
		const { hide, animation, animationReverse } = this.state
		return `${defaultClassName} ${animation}${animationReverse?'-reverse':''} ${hide?'-reverse':''}`;
	}
}

export default MaskFade
