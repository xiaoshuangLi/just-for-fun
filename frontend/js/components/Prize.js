import React, { Component } from 'react'

import { Slide } from '../components/animation'
import { icons, timeout, getFromArr } from '../common'

export default class Prize extends Slide {
	constructor(props) {
		super(props)

		this.delete = this.delete.bind(this)
	}

	componentWillAppear(){
		const self = this

		timeout(() => {
			self.closeComponent(self.delete)
		}, 3500)
	}

	delete(){
		const { actions, present, id} = this.props
		let curr = new Set(present.prizeOpts.curr)

    curr.delete(id)
		actions.edit({curr}, 'prizeOpts')
	}

	prize(){
		const { present, id} = this.props

		return getFromArr(present.prizes, 'id', id)
	}

	render() {
		const item = this.prize()
		const Icon = icons[item.icon || 'Trophy']

		return (
			<div className="prize-container">
			  <div className="table center">
				  <div className="icon">
				    <Icon className="svg"/>
				  </div>
				  <div className="info">
				    <div className="title">{item.name}</div>
				    <div className="desc">{item.desc ||'获得此成就'}</div>
				  </div>
			  </div>
			</div>
		)
	}
}