import React, { Component } from 'react'

import Avatar from '../common/Avatar'
import Info from '../common/Info'

export default class Three extends Component {
	constructor(props){
		super(props)
	}

	render(){
		const { className = '', present } = this.props

		return(
			<div className={`resume-body three-body ${className}`}>
			  <div className="part-1 table">
			    <div className="part-name">
			      <div className="title">{present.name.val}</div>
			      <div className="desc">Just for fun</div>
			    </div>

			    <div className="part-wanna">
			      <div className="title">{present.wanna.val}</div>
			      <div className="desc">wanna be</div>
			    </div>
			  </div>

		    <div className="part table">
	        <div>
			      <div className="part-title">种族天赋</div>
			      <div className="part-body">
		          <div className="part-skills">
		          {present.skills.map(item => 
		          	<div className="item" key={item.id} title={`${item.val} - ${item.score}分`}>
		          	  <div className="icon fa fa-arrow-circle-o-right"></div>
		          	  <div className="title">{item.val}</div>
		          	  <div className="score" style={{width: `calc(${item.score}% - ${item.score * 0.2}px)`}}></div>
		          	</div>
		          )}
		          </div>
			      </div>
	        </div>
          <div className="part-avatar">
	          <Avatar present={present} />
          </div>
		    </div>
		    <div className="part">
		      <div className="part-title">项目经验</div>
		      <div className="part-body margin">{present.experience.val}</div>
		    </div>
		    <div className="part table">
		      <div className="equal words">
		        <div className="part-title">种族天赋</div>
		        <div className="part-body">
		          {present.words.slice(0,8).map(item => <span className="item" key={item.id}>{item.val}</span>)}
		        </div>
		      </div>
		      <div className="equal words">
		        <div className="part-title">个人爱好</div>
		        <div className="part-body">
		          {present.hobbys.slice(0,8).map(item => <span className="item" key={item.id}>{item.val}</span>)}
		        </div>
		      </div>
		    </div>
		    <div className="part">
		      <div className="part-title">自我介绍</div>
		      <div className="part-body margin">{present.desc.val}</div>
		    </div>

		    <div className="part">
		      <div className="part-title">Nice to meet you</div>
	        <Info className="part-body part-info" txt={true} icon={false} present={present}> 
	        </Info>
		    </div>
			</div>
		)
	}
}