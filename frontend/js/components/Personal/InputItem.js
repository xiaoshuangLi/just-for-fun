import React, { Component } from 'react'
import { validInput } from '../../common'

export default class InputItem extends Component {
	constructor(props) {
		super(props)

		this.change = this.change.bind(this)
	}

	change(e) {
		const { actionType, edit } = this.props;
		const el = e.target

		el.classList.toggle('error', !validInput(el))
		edit(el.value, actionType)
	}

	render(){
		const { lg, text, data, actionType, type = 'text', minLength, maxLength, pattern, disabled, add, showAdd} = this.props
		const { val, name } = data

		const attrs = {
			text: {
				className: `input text ${val?'active':''}`,
				value: val,
				rows: 6,
			},
			input: {
				className: `input ${val?'active':''}`,
				value: val,
			  type,
			},
			common: {
				maxLength,
				minLength,
				pattern,
				disabled
			}
		}

		return (
			<div className={`input-item ${lg?'lg':''}`}>
			  { text ? 
			  	(<textarea name={actionType} onChange={this.change} {...attrs.text} {...attrs.common}></textarea>) : 
			  	(<input name={actionType} onChange={this.change} {...attrs.input} {...attrs.common}/>)}
			  <label className="label" content={`${name}`}>
				  	{showAdd && <i className="icon add fa fa-plus" onClick={(e)=>add({}, actionType)}></i>}
				  	{!disabled && <i className="icon invalid fa fa-exclamation-triangle"></i>}
			  </label>
			</div>
		)
	}
}