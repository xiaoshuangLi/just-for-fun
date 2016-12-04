import React, { Component } from 'react'
import InputItem from './InputItem'

export default class WordList extends Component {
	constructor(props) {
		super(props)

	}

	render(){
		const {del} = this.props
		
		return (
			<div className="word-list">
			  { this.props.data.map(item => 
			  	<div onClick={(e)=>{ del && del(item.id, 'word')}} key={item.id} className="word-item">{item.val}</div>) }
			</div>
		)
	}
}