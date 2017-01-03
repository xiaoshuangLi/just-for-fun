import React, { Component } from 'react'
import {Slowshow} from '../components/animation'

import list from '../components/Resumes'

export default class Resumes extends Slowshow {
  constructor(props) {
    super(props)

    this.detail = this.detail.bind(this);
  }

  detail(id){
    const { actions, present } = this.props
    actions.edit({detail: id}, 'web')
  }

  render(){
  	const { present } = this.props;
    const { web, resumes } = present
    const { isEditing, detail } = web
  	
  	return(
      <div className={`resume-conatiner ${(isEditing || detail)&&'blur'} ${web.bg && 'has-bg'}`}>
        <div className="resume-list">
          { resumes.filter(item => !item.hide).map(item => {
            const Resume = list[item.val]
            return (<div className="resume-item" onClick={(e) => this.detail(item.id)} key={item.id}>
              <Resume present={present} detail={item}/>
            </div>)
          }) }
        </div>
      </div>
  	)
  }
}