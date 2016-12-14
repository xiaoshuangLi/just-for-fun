import React, { Component } from 'react'

export default class Three extends Component {
	constructor(props){
		super(props)
	}

	render(){
		const { className = '', present } = this.props

		return(
			<div className={`resume-body three-body ${className}`}></div>
		)
	}
}