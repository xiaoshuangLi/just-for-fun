import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import icons from '../../common/icons'

export default class HobbyItem extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		const { toggle, data = {} } = this.props
		const { hide, icon = 'Bug' } = data
		const Svg = icons[icon]

		return (
			<div className="hobby-item">
			  <Svg className="active" width="50%" height="50%"/>
			</div>
		)
	}
}