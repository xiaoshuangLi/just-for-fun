import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { validInput } from '../../common'

export default class SkillItem extends Component {
	constructor(props) {
		super(props)

		this.change = this.change.bind(this)
		this.del = this.del.bind(this)
	}

	change(e, attr = 'val'){
		const { data, edit} = this.props;
		const { id } = data
		const input = findDOMNode(this.refs.input)

		input.classList.toggle('error', !validInput(findDOMNode(this)))
		edit({
			id, 
			[attr]: e.target.value
		}, 'skill')
	}

	del(){
		const { data, del} = this.props;
		const { id } = data
		del(id, 'skill')
	}

	render(){
		const {data, index, del} = this.props
		const {name, val, score = 0, id} = data

		return (
			<div className="input-item skill">
			  <input type="text"  ref='input' name="val" className={`input val ${val?'active':''}`} value={val} onChange={this.change} minLength={0} maxLength={16}/>
			  <label className="label" content={`No.${index+1}`}>
				  <i className="icon invalid fa fa-exclamation-triangle"></i>
				  <i className="icon remove fa fa-minus" onClick={this.del}></i>
			  </label>

			  <input type="number"  ref='score' name="score" value={score} min={0} max={100} onChange={(e) =>this.change(e, 'score')} className="input score"/>
			</div>
		)
	}
}