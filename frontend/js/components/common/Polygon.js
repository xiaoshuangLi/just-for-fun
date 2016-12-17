import React, { Component } from 'react'

export default class Polygon extends Component {
	constructor(props) {
		super(props)
	}

	list(){
		const { num = 6, animation = '', list = []} = this.props
  	let res = []
    
    if(list.length) {
    	res = list.map((item, index) => 
	    	<div className={`item ${animation}`} key={index}>
	  			<div className="item-content">
	  			  <div className="item-title">{item}</div>
	  			</div>
	  		</div>
  		)

  		return res
    }

  	for(var v = 0; v <= num ; v++) {
  		res.push(<div className={`item ${animation}`} key={v}>
  			<div className="item-content"></div>
  		</div>)
  	}

  	return res
	}

	render(){
		const { list = [],num = 3, text= '', className = ''} = this.props

		return (
			<div className = {`polygon ${className}`} data-num={list.length ? list.length : num}>
        { this.list() }
        <div className="title">{text}</div>
			</div>
		)
	}
} 