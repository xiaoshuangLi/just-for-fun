import React, { Component } from 'react'
import { validInput } from '../../common'

export default class InputItem extends Component {
	constructor(props) {
		super(props)

		this.change = this.change.bind(this)
		this.enter = this.enter.bind(this)
	}

	change(e) {
		const { actionType, edit} = this.props;
		const el = e.target

		el.classList.toggle('error', !validInput(el))
		edit && edit(el.value, actionType)
	}

	enter(e) {
		const { enter} = this.props;
		e.which === 13 && enter && enter()
	}

	render(){
		const { lg, text, data, actionType, type = 'text', minLength, maxLength, pattern, disabled, add, enter, showAdd} = this.props
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
			  	(<input name={actionType} onChange={this.change} onKeyDown={this.enter} {...attrs.input} {...attrs.common}/>)}
			  <label className="label" content={`${name}`}>
				  	{showAdd && <i className="icon add fa fa-plus" onClick={(e)=>add({}, actionType)}></i>}
				  	{!disabled && <i className="icon invalid fa fa-exclamation-triangle"></i>}
				  	{enter && <i className="icon enter">
					  	<span>E</span>
					  	<span>n</span>
					  	<span>t</span>
					  	<span>e</span>
					  	<span>r</span>
				  	</i>}
			  </label>
			</div>
		)
	}
}