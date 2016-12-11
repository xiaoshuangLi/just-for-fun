import React, { Component } from 'react'
import * as res from 'gsap'

import icons from '../../common/icons'
import Heart from '../common/Heart'

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

				    <div className="words-list">
				      { present.words.slice(0,9).map((item, index) => 
			      	  <div className="item" key={index}>{item.val}</div>
			      	)}
				    </div>
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
				    <div className="img" style={{ backgroundImage: `url(${present.avatar.val})` }}></div>
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
			        <div className="hobbys-list">
			          {present.hobbys.slice(0,8).map(item=> 
		              {
		              	const {icon, val} = item
		              	const Svg = icons[icon]
		              	return (<div className="item" key={item.id}>
		              		<Svg/>
		              		<span className="title">{val}</span>
		              	</div>)
        		      }
			          )}
			        </div>
			      </div>
			    </div>

			    <div className="part-img"></div>

			    <div className="part-2">
		        <div className="part-info-list">
		         <div className="item">
			         <div className="icon"></div>
			          <a className="icon-body" href={`mailto:${present.email.val}`}>
			            <i className=" fa fa-envelope-o"></i>
			          </a>
				        <a href={`mailto:${present.email.val}`} className="title">{present.email.val}</a>
			         </div>
		         <div className="item">
		           <div className="icon fa fa-mobile"></div>
			         <a href={`tel:${present.phone.val}`} className="title">{present.phone.val}</a>
		         </div>
		         <div className="item">
			         <div className="icon fa fa-birthday-cake"></div><div className="title">{present.birthday.val}
			         </div>
			         </div>
		         <div className="item">
			         <div className="icon fa fa-graduation-cap"></div><div className="title">{present.education.val}&emsp;{present.school.val}
			         </div>
			         </div>
		        </div>
			    </div>
			  </div>
			</div>
		)
	}
}