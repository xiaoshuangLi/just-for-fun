import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import icons from '../../common/icons'

export default class HobbyItem extends Component {
	constructor(props) {
		super(props)

		this.toggle = this.toggle.bind(this)
	}

	toggle(){
		const { toggle, data = {} } = this.props
		toggle(data.id, 'hobby')
	}

	render(){
		const { toggle, data = {} } = this.props
		const { hide, icon = 'Bug' } = data
		const Svg = icons[icon]

		return (
			<div className={`hobby-item ${!data.hide && 'active'}`} onClick={this.toggle} title={data.name}>
			  <Svg width="50%" height="50%"/>
			</div>
		)
	}
}