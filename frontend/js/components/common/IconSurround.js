import React, { Component } from 'react'

export default class IconSurround extends Component {
	constructor(props) {
		super(props)
	}


	render(){
		const { className = 'fa fa-github', text = '', content = ''} = this.props

		return (
			<div className="icon-surround" data-num={text.length}>
			  <div className={`icon ${className}`}>{content}</div>
			  <div className="surround">
			    {text.split('').map((item, index) => 
			    	<span key={index}>{item}</span>
			    )}
			  </div>
			</div>
		)
	}
} 