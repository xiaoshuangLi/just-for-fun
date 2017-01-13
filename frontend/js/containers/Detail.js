import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import { Slowshow } from '../components/animation'
import list from '../components/Resumes'

import { getFromArr, timeout, getStyles} from '../common'
import { MaskFade } from '../components/common'

export default class Resume extends MaskFade(Slowshow) {
	constructor(props) {
		super(props)

		this.edit = this.edit.bind(this)
		this.init()
	}

	edit(){
		const { actions } = this.props;

		actions.edit({detail: ''}, 'web')
	}

	render(){
		const { present } = this.props
		const { web, resumes} = present

		const item = getFromArr(resumes, 'id', web.detail)
		const Resume = list[item.val]

		return (
			<div className="detail-container" tabIndex="1" onTouchMove={e => this.touchMove(e)} onTouchStart={e => this.touchStart(e)} onTouchEnd={e => this.touchEnd(e)} onKeyDown={e => this.keyDown(e)}>
			  <div className="bg" onClick={this.edit}></div>
			  <Resume present={present} className={this.getClassName('fight')} detail={item} ref='container'/>
			</div>
		)
	}
}