import React, { Component } from 'react'

import {timeout} from '../../common'

export default class Heart extends Component {
	constructor(props){
		super(props)
	}

	active(e){
		const {classList} = e.currentTarget;
		let res = classList.contains('active')

		let first = !res?'reverse' : 'active';
		let next = res?'reverse' : 'active';

		classList.remove(first)

		timeout(function(){
			classList.add(next)
		}, 10)
	}

	render(){
		const { children, className } = this.props

		return (
			 <div className={`awesome ${className}`} onClick={this.active}>
	      <div className="awesome-body">
	        <input type="checkbox"/>
	        <label>
	        {children? children : <i className="fa fa-heart"></i>}
	        </label>
	      </div>
	    </div>
    )
	}
}