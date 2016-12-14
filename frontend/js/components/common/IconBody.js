import React, { Component } from 'react'

export default class Heart extends Component {
	constructor(props){
		super(props)
	}

	render(){
		const { text = '', icon = 'fa fa-heart-o' } = this.props

		return (
			<div className="icon">
	      <div className={`icon-body num-${text.length + 1}`}>
	        <i className={icon}></i>
	        {text.split('').reverse().map((txt, index) => <span key={index} data-before={txt}></span>)}
	      </div>
			</div>
    )
	}
}