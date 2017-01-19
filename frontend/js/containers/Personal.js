import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import {Slowshow} from '../components/animation'
import {InputItem, SkillItem, HobbyList, WordList} from '../components/Personal'

import {validAttrs, validInput} from '../common'

let attrs = {
	list: [
		{ actionType: 'name', lg: true},
		'avatar',
		'birthday',
		'phone',
		{ type: 'email', actionType: 'email' },
		'education',
		'school',
		{ actionType: 'desc', text: true }
	],
	experience: { actionType: 'experience', text: true },
	editing: { actionType: 'editing' },
	skill: {
		data: {
			val: '专业技能',
			name: '天赋加点'
		},

		attrs: {
			lg: true,
			disabled: true,
			actionType: 'skill'
		}
	},
	wanna: {lg: true}
}

export default class Personal extends Slowshow{
	constructor(props) {
		super(props)

		this.edit = this.edit.bind(this)
		this.del = this.del.bind(this)
		this.addWord = this.addWord.bind(this)
	}
	edit(){
		const { actions } = this.props
		actions.edit({valid: validInput(findDOMNode(this.refs.form))},	 'web')
		actions.edit.apply(null, arguments)
	}
	del(){
		const { actions } = this.props
		actions.edit({valid: validInput(findDOMNode(this.refs.form))},	 'web')
		actions.del.apply(null, arguments)
	}
	addWord(){
		const { present, actions} = this.props
		const { add, edit } = actions
		const { editing } = present
		const { val } = editing

		add( { name: val, val}, 'word')
		edit( '', 'editing')
	}
	render(){
		const { present, actions} = this.props
		const { skills } = present

		return (
			<div className="personal-container row">
			  <div className="fw-20 text-center">
					<div className="avatar-container">
						<div className="img" style={{backgroundImage: 'url(' + (present.avatar.val||'') + ')'}}></div>
					</div>
			  </div>

				<div className="input-list fw-80">
					<form ref="form">
						<div className="row">
							<div className="input-list-body  fw-35">
							  { attrs.list.map((item, index) =>{
							    item = typeof item == 'string' ? { actionType: item } : item
							    const obj = validAttrs[item.actionType]
							  	return <InputItem key={index} edit={this.edit} data={present[item.actionType]} {...item} {...obj}/>
							  })}
							</div>
							<div className="input-list-body  fw-35">
							  <InputItem showAdd={present.skills.length < 6} add={actions.add} data={attrs.skill.data} {...attrs.skill.attrs}/>
							  { skills.map((item, index) => 
							  	<SkillItem key={index} index={index} edit={this.edit} del={this.del} data={item} {...item}/>
							  )}
							  <InputItem edit={this.edit} data={present['experience']} {...attrs.experience} {...validAttrs['experience']}/>
							</div>
							<div className="input-list-body  fw-30">
							  <InputItem actionType="wanna" edit={this.edit} data={present.wanna} {...validAttrs.wanna}/>
							  <HobbyList data={present.hobbys} toggle={actions.toggle}></HobbyList>
							  <InputItem enter={this.addWord} edit={this.edit} {...attrs.editing} data={present['editing']} {...validAttrs.editing}/>
							  <WordList del={this.del} data={present.words}></WordList>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
}