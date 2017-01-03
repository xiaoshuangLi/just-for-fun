import React, { Component } from 'react'

import {Avatar, Info, Polygon, AttrList} from '../common'
import icons from '../../common/icons'

export default class Four extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		const { Bird, Ship, Windmill } = icons
		const list = ['music', 'love', 'happy', 'movie', 'game', 'friend']

		const { present } = this.props 
		
		return (
			<div className="resume-body four-body">
			  <div className="part-1 text-center">
			    <span className="title">JSUT</span>
			    <Polygon list={list}  text='FOR' className="ed" animation="fade"/>
			    <span className="title">FUN</span>
			  </div>

			  <div className="part">
			    <div className="part-header">
			      <Bird className="icon"/>
			    </div>
			    <div className="part-body">
			      <div className="table">
			        <div className="equal part-left">
			          <div className="part-title">HELLO</div>
			          <div className="part-desc">
				          我是{present.name.val}
				          <br/>
				          生日&nbsp;{present.birthday.val}
				          <br/>
				          学历&nbsp;{present.education.val},{present.school.val}
			          </div>
			        </div>
			        <div className="equal part-right">
			          <div className="part-title">联系方式</div>
			          <div className="part-desc">
				          {present.phone.val}
				          <br/>
				          {present.email.val} 
				          <br/>
				          <AttrList present={present} attr="words" className="part-words" max={2}/>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>

			  <div className="part">
			    <div className="part-header">
			      <Windmill className="icon windmill"/>
			    </div>
			    <div className="part-body">
			      <div className="table">
			        <div className="equal part-left" >
			          <div className="part-title">项目经验</div>
			          <div className="part-desc part-experience" title={present.experience.val}>
			            {present.experience.val}
			          </div>
			        </div>
			        <div className="equal part-right">
			          <div className="part-title">WANNA BE</div>
			          <div className="part-desc">
				          {present.wanna.val}
			          </div>
			          <div className="part-title">自我介绍</div>
			          <div className="part-desc part-description" title={present.desc.val}>
				          {present.desc.val}
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>

			  <div className="part">
			    <div className="part-header">
			      <div className="ship">
				      <Ship className="icon"/>
			      </div>
			    </div>
			    <div className="part-body">
			      <div className="table">
			        <div className="equal part-left">
			          <div className="part-title">专业技能</div>
			          <div className="part-desc part-skills">
			            {present.skills.slice(0, 5).map(item => 
			            	<div className="item" key={item.id}>
			            	  <div className="desc" style={{width: `${90 - item.score/2}%`}}>{item.val}</div>
			            	  <div className="shadow" style={{width: `${item.score/2}%`}}></div>
			            	</div>
			            )}
			          </div>
			        </div>
			        <div className="equal part-right">
			          <div className="part-title">个人爱好</div>
			          <AttrList present={present} className="part-desc part-hobbys" max={20}/>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}