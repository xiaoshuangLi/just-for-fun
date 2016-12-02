import React, { component } from 'react'
import { findDOMNode } from 'react-dom'

import Slowshow from '../animation/Slowshow'
import InputItem from './InputItem'
import SkillItem from './SkillItem'
import HobbyList from './HobbyList'

import {validAttrs, validInput} from '../../common'

export default class Personal extends Slowshow{
	constructor(props) {
		super(props)

		this.edit = this.edit.bind(this)
		this.del = this.del.bind(this)
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
	render(){
		const { present, actions} = this.props
		const { skills } = present

		const attrs = {
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
			wanna: {
				data: {
					val: '千段攻城狮',
					name: 'Wanna Be'
				},

				attrs: {
					lg: true,
					disabled: true
				}
			}
		}

		return (
			<div className="personal-container">
				<div className="avatar-container">
					<div className="img" style={{backgroundImage: 'url(' + (present.avatar.val||'') + ')'}}></div>
				</div>

				<div className="input-list">
					<form ref="form">
						<div className="table">
							<div className="equal">
							  { attrs.list.map((item, index) =>{
							    item = typeof item == 'string' ? { actionType: item } : item
							    const obj = validAttrs[item.actionType]
							  	return <InputItem key={index} edit={this.edit} data={present[item.actionType]} {...item} {...obj}/>
							  })}
							</div>
							<div className="equal">
							  <InputItem showAdd={present.skills.length < 6} add={actions.add} data={attrs.skill.data} {...attrs.skill.attrs}/>
							  { skills.map((item, index) => 
							  	<SkillItem key={index} index={index} edit={this.edit} del={this.del} data={item} {...item}/>
							  )}
							  <InputItem edit={this.edit} data={present['experience']} {...attrs.experience} {...validAttrs['experience']}/>
							</div>
							<div className="equal">
							  <InputItem data={attrs.wanna.data} {...attrs.wanna.attrs}/>
							  <HobbyList data={present.hobbys}></HobbyList>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
}