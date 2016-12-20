import React, { Component } from 'react'

import {Avatar, IconSurround, Info, Hobbys, AttrList} from '../common'


export default class Five extends Component {
	constructor(props){
		super(props)
	}

	render(){
		const {present} = this.props

		return (
			<div className="resume-body five-body">
			  <div className="part-1">
			    <div className="title">
			      <div>JSUT FOR FUN</div>
			    </div>
			  </div>

			  <div className="part-avatar">
			    <Avatar present= {present}/>
			  </div>

			  <div className="part-2 part">
			    <div className="title">{present.name.val}</div>
			    <div className="desc">{present.wanna.val}&nbsp;/&nbsp;WANNA BE</div>
			  </div>

			  <div className="part-3 part">
			    <IconSurround className="fa fa-github" text="全球最大同性交友网站"/>
			    <IconSurround className="fa fa-chrome" text="IE这个挨刀的"/>
			  </div>

			  <Info className="part part-info" present={present}></Info>

			  <div className="part no-border part-right">
			    <div className="part-title">项目经验</div>
			    <div className="part-body" title={present.experience.val}>
			      <div className="desc">{present.experience.val}</div>
			    </div>
			  </div>

			  <div className="part no-border">
			    <div className="part-title">个人介绍</div>
			    <div className="part-body" title={present.desc.val}>
			      <div className="desc">{present.desc.val}</div>
			    </div>
			  </div>

			  <div className="part part-right no-border">
			    <div className="part-title">爱好·技能</div>
          <AttrList present={present} className="part-body part-hobbys" init={true} max={8}/>
			  </div>

        <AttrList present={present} attr="skills" className="part part-skills" init={true} max={8}/>
			</div>
		)
	}
}