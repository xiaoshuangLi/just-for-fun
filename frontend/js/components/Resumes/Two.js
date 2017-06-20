import React, { Component } from 'react'

import {Avatar, Words, Info, Hobbies} from '../common'


export default class Two extends Component{
	constructor(props){
		super(props)
	}

	render(){
		const { present, className = '' } = this.props;

		return(
			<div className={`resume-body two-body ${className}`}>
			  <div className="wave part-1">
			    <Words text="wanna be"/>
			    <div className="part-title row">
				    {present.wanna.val}&emsp;
				    <span className="fightclub words init">
				      <Words className="before init" animation="rotate" text="CLUB" textAfter="TALK"/>
				      <Words className="after init" animation="rotate" text="FIGHT" textAfter="DONOT"/>
				    </span>
				    <span className="z-1">{present.name.val}</span>
			    </div>
			    <div className="part-words">
			      { present.words.map(word => <span className="item" key={word.id}>{word.val}</span>) }
			    </div>
			  </div>

			  <div className="part-2 padding">
			    <div className="table center">
				    <div className="part-desc equal" title={present.experience.val}>
				      <div className="title">Hello world!</div>
				      <div className="desc">{present.experience.val}</div>
				    </div>
				    <div className="part-avatar equal">
				      <Avatar present={present}/>
				    </div>
			    </div>
			  </div>

			  <div className="part-hobbies padding row">
			    <div className="part-line table center words init">
				    <div className="left-line">
				      <Words className="top init" animation="fade" reverse={true} text="SOME YELLS STOP"/>
					    <div className="line"></div>
				      <Words className="bottom init" animation="fade" reverse={true} text="GOES LIMP"/>
				    </div>
				    <div className="title">
				      <Words className="init" animation="rotate" middle={true} text="HOBBIES" textAfter="RULE  3"/>
				    </div>
				    <div className="right-line">
				      <Words className="top init" animation="fade" text="TAPS OUT"/>
					    <div className="line"></div>
				      <Words className="bottom init" animation="fade" text="THE FIGHT IS OVER"/>
				    </div>
			    </div>
	        <Hobbies max={8} present={present} className="table center"/>
			  </div>

			  <div className="part-3 padding">
			    <div className="table center">
			      <div className="part-skills equal">
			        <div className="part-skills-title">
			          <div className="icon fa fa-hand-rock-o"></div>
			          <div className="desc">SKILLS</div>
			        </div>
					    {present.skills.slice(0, 5).map(item =>{ 
	              return (<div className="item" key={item.id}>
	              	<div className="shadow" style={{width: `${100 - item.score + 10}%`}}></div>
	              	<div className="title">{item.val}</div>
	              </div>)}
					    )}
				    </div>
			      <div className="part-info equal">
			        <Info className="part-info-body" present={present}> 
				        <div className="part-info-title">Hear from you soon?</div>
			        </Info>
			      </div>
			    </div>
			  </div>

			  <div className="part-footer">
			    <div className="title">
				    THANK YOU FOR LOOKING
			    </div>
			  </div>
			</div>
		)
	}
}