import React, { Component } from 'react'

export default class Polygon extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		const { attr= 'hobbys', className = '', max = 8, present = {}} = this.props
		const list = present[attr] ? present[attr]: []

		return (
			<div className={`part-desc part-${attr}`}>
			  {list.slice(0, max).map(item =>
					<div className = "item" key={item.id}>{item.val}</div>
			  )}
			</div>
		)
	}
} 