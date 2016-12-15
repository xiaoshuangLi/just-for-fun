import React, { Component } from 'react'

export default class Words extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		const {className = '', present} = this.props

		return (
			<div className = {`img ${className}`} style={{backgroundImage: `url(${present.avatar.val})`}}>
			</div>
		)
	}
} 