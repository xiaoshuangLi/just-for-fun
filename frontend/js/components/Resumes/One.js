import React, { Component } from 'react'
import * as res from 'gsap'

import {Avatar, IconBody, Heart, AttrList, Hobbys} from '../common'

export default class One extends Component {
	constructor(props){
		super(props)
	}


	render(){
		const { present, className} = this.props

		return (
			<div className={`resume-body one-body ${className}`}>
			  <div className="left-part">
				  <div className="part-1">
				    <div className="name">
				      { present.name.val }
				    </div>

	          <AttrList present={present} attr="words" className="words-list" init={true} max={9}/>
				  </div>

				  <div className="part">
				    <div className="title">专业技能</div>
				    <div className="content">
				      <div className="skills-list">
				        {present.skills.slice(0,5).map(item => 
			            <div className="item" key={item.id}>
			              <div className="title">{item.val}</div>
			              <div className="score">
			                <Heart className="icon"><i className="fa fa-github"></i></Heart>
			                <Heart className="icon"><i className="fa fa-github"></i></Heart>
			                <Heart className="icon"><i className="fa fa-github"></i></Heart>
			                <Heart className="icon"><i className="fa fa-github"></i></Heart>
			                <Heart className="icon"><i className="fa fa-github"></i></Heart>
			                <div className="shadow" style={{width: `${100 - item.score}%`}}></div>
			              </div>
			            </div>
				        )}
				      </div>
				    </div>
				  </div>

				  <div className="part">
					  <div className="title">项目经验</div>
					  <div className="content experience" title={present.experience.val}>
					    {present.experience.val}
					  </div>
				  </div>

				  <div className="part-desc">
				    <Avatar present={present} />
				    {present.desc.val}
				  </div>
			  </div>
			  <div className="right-part">
			    <div className="part">
			      <div className="title">职位意向</div>
			      <div className="content wanna">{present.wanna.val}
            </div>
			    </div>

			    <div className="part part-hobby">
			      <div className="title">个人爱好</div>
			      <div className="content">
			        <Hobbys max={8} present={present} className="hobbys-list"/>
			      </div>
			    </div>

			    <div className="part-img"></div>

			    <div className="part-2">
		        <div className="part-info-list">
		         <div className="item">
		          <IconBody text="想你就写信" icon="fa fa-envelope-o"/>
			        <a className="title" href={`mailto:${present.email.val}`}>{present.email.val}</a>
		         </div>
		         <div className="item">
		           <IconBody text="慢慢听你的声音" icon="fa fa-mobile"/>
			         <a href={`tel:${present.phone.val}`} className="title">{present.phone.val}</a>
		         </div>
		         <div className="item">
		           <IconBody text="闭眼许愿的安静" icon="fa fa-birthday-cake"/>
			         <div className="title">{present.birthday.val}</div>
			       </div>
		         <div className="item">
		           <IconBody text="伴有窗边的风铃" icon="fa fa-university"/>
			         <div className="title">{present.education.val}&emsp;{present.school.val}</div>
			         </div>
		        </div>
			    </div>
			  </div>
			</div>
		)
	}
}