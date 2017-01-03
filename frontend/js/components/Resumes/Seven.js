import React, { Component } from 'react'

import {Avatar, Phone, Email, Hobbys, AttrList} from '../common'

export default class Six extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		const {present, detail} = this.props

		return(
			<div className="resume-body seven-body no-border">
			  <div className="part-1">
			    <div className="part-avatar">
				    <Avatar present= {present}/>

				    <div className="part-name">
				      {present.name.val}
				    </div>
			    </div>

			    <div className="part-wanna">
			      wanna be&nbsp;&&nbsp;{present.wanna.val}
			    </div>
			  </div>

			  <div className="part-2">
			    <div className="part-title">ME</div>
			    <div className="part-body table">
			       <div className="equal part-left">
				        <div className="part">
			            项目经验
				        </div>
				        <div className="part-desc part-paragraph " title={present.experience.val}>
						      <div className="desc">{present.experience.val}</div>
				        </div>
				        <div className="part">
			            个人介绍
				        </div>
				        <div className="part-desc part-paragraph " title={present.desc.val}>
						      <div className="desc">{present.desc.val}</div>
				        </div>
			       </div>
			       <div className="equal part-right">
			          <div className="part after-left">
			             生日
			          </div>
			          <div className="part-desc">
			             {present.birthday.val}
			          </div>
			          <div className="part after-left">
			             教育经历
			          </div>
			          <div className="part-desc">
			             {present.education.val}&emsp;{present.school.val}
			          </div>
			          <div className="part after-left">
			             专业技能
			          </div>
			          <div className="part-skill part-desc">
			            {present.skills.slice(0, 5).map(item => 
			            	<div className="item" key={item.id}>
			            	  <div className="desc">{item.val}</div>
			            	  <div className="shadow">
			            	    <div className="score" style={{width: `${item.score}%`}}></div>
			            	  </div>
			            	</div>
			            )}
			          </div>
			          <div className="part after-left">
			             个人爱好
			          </div>
			          <AttrList present={present} className="part-desc part-text" init={true} max={12}/>
			       </div>
			    </div>
			  </div>

			  <div className="part-3">
			    <div className="part after-center">
			      联系方式
			    </div>

			    <div className="part-info">
			      <Phone txt={true} icon={false} present={present}/>
			      <Email txt={true} icon={false} present={present}/>
			    </div>
			  </div>
			</div>
		)
	}
}