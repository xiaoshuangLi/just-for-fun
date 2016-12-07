import React, { Component } from 'react'
import Slowshow from '../animation/Slowshow'

import { getFromArr } from '../../common'
import list from './list'

export default class Resume extends Slowshow {
	constructor(props) {
		super(props)

		this.edit = this.edit.bind(this)
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
			<div className="detail-container">
			  <div className="bg" onClick={this.edit}></div>
			  <Resume />
			</div>
		)
	}
}