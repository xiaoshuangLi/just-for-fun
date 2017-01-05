import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { TweenMax } from 'gsap'

import { Slowshow } from '../components/animation'
import list from '../components/Resumes'

import { getFromArr, getChildrenByLevel, timeout} from '../common'

export default class Resume extends Slowshow {
	constructor(props) {
		super(props)

		this.edit = this.edit.bind(this)
		this.keyDown = this.keyDown.bind(this)
		this.touchStart = this.touchStart.bind(this)
		this.touchMove = this.touchMove.bind(this)

		this.keys = [
			{ val: 1, code: [39, 40]},
			{ val: -1, code: [37, 38]}
		]

		this.start = {x: 0, y: 0}
    
    this.anis = ['fade-in', 'fade-in-reverse', 'fade-out', 'fade-out-reverse']
    this.animating = false
		this.mAnimation = false
		this.mHide = false
	}

	edit(){
		const { actions } = this.props;

		actions.edit({detail: ''}, 'web')
	}

	componentDidMount(){
		let ele = findDOMNode(this)
		ele.focus()
	}

	className(ani = 'fade-out', hide = true, reverse = false){
		let ele = findDOMNode(this.refs.container)

		this.anis.map(className => {
			ele.classList.remove(className)
		})

		ele.classList.add(`${ani}${reverse?'-reverse':''}`)
		hide && ele.classList.add('mask-hide')
	}

	animate(reverse = false, cb){
		let self = this
		let ele = findDOMNode(self.refs.container)

		self.className('fade-out', true, reverse)

    timeout(function(){
    	cb&&cb();
			self.className('fade-in', false, reverse)
    }, 1500)

    timeout(function(){
    	self.animating = false
    }, 3000)
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
		this.animate(index < 0, function(){
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
		this.start = {x: e.touches[0].clientX, y: e.touches[0].clientY}
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

	render(){
		const { present } = this.props
		const { web, resumes} = present

		const item = getFromArr(resumes, 'id', web.detail)
		const Resume = list[item.val]

		return (
			<div className="detail-container" tabIndex="1" onTouchMove={e => this.touchMove(e)} onTouchStart={e => this.touchStart(e)} onKeyDown={e => this.keyDown(e)}>
			  <div className="bg" onClick={this.edit}></div>
			  <Resume present={present} className='fight' detail={item} ref='container'/>
			</div>
		)
	}
}