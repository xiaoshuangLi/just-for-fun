import React, { Component } from 'react'
import icons from '../../common/icons'

export default class Words extends Component {
	constructor(props) {
		super(props)
	}

	render(){ 
		const { present, max = 5, className = '', svg = true} = this.props

		return (
			<div className = {className}>
        {present.hobbys.slice(0, max).map(item => 
        	{ 
        		const Svg = icons[item.icon]
        		return (<div className="item" key={item.id}>
	        	  {svg && <Svg />}
	        	  <div className="title">{item.val}</div>
	        	</div>)
        	}
        )}
			</div>
		)
	}
} 