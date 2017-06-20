import React, { Component } from 'react'

import {Avatar, IconSurround, Info, Hobbies, AttrList, CanvasBg} from '../common'

export default class Six extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		const {present, detail, className = ''} = this.props
		const bless = 'DOVEME'

		return(
			<div className={`resume-body six-body no-body ${className}`}>
			  <div className="part-body">
			    <CanvasBg className="part-canvas" present={present} stop={detail.id != present.web.detail}/>
			    <div className="part-1">
			      <div className="part-name">{present.name.val}</div>
			      <div className="part-wanna">
			        <span>{present.wanna.val}</span>
			        &nbsp;
			        <span>Wanna be</span>
			      </div>
			      <div className="part-avatar">
				      <Avatar present = {present} />
			      </div>

			      <div className="part-description" title={present.desc.val}>
				      {present.desc.val}
			      </div>
			    </div>

			    <div className="part-2 table">
			      <div className="equal part-left">
			        <div className="part">
			          <div className="part-title">个人爱好</div>
			          <Hobbies className="part-desc part-hobbies" max={12} svg={false} present={present}/>
			        </div>

			        <div className="part">
			          <div className="part-title">专业技能</div>
			          <div className="part-desc part-skills">
				          {present.skills.map((item, index) => 
				          	<div className="item" key={item.id}>
				          	  <div className="title">{item.val}</div>
				          	  <div className="desc">
					          	  <div className="square cube" style={{left: `${item.score > 10 ? item.score : 10}%`}}>
					          	    <div className="before"></div>
					          	    <div className="after" data-after={bless[index]}></div>
					          	  </div>
				          	  </div>
				          	</div>
				          )}
			          </div>
			        </div>
			      </div>
			      <div className="equal part-right">
			        <div className="part">
			          <div className="part-title">种族天赋</div>
			          <AttrList present={present} attr="words" className="part-words part-desc" max={8}/>
			        </div>

			        <div className="part">
			          <div className="part-title">项目经验</div>
			          <div className="part-desc part-experience" title={present.experience.val}>{present.experience.val}</div>
			        </div>
			      </div>
			    </div>
			  </div>
			  
			  <Info className="part-info part-footer" txt={true} icon={false} present={present}/>
			</div>
		)
	}
}