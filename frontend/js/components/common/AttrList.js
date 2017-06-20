import React, { Component } from 'react'

export default class Polygon extends Component {
	constructor(props) {
		super(props)
	}

	className(){
		const { className = '', init = false , attr = 'hobbies'} = this.props

		return init ? className : `part-desc part-${attr} ${className}`;
	}

	render(){
		const { attr= 'hobbies', max = 8, present = {}, children} = this.props
		const list = present[attr] ? present[attr]: []

		return (
			<div className={this.className()}>
			  {list.slice(0, max).map(item =>
					<div className = "item" key={item.id}>{item.val}</div>
			  )}

			  {children}
			</div>
		)
	}
} 