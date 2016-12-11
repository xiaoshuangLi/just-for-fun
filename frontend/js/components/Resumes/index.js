import React, { Component } from 'react'
import Slowshow from '../animation/Slowshow'

import list from './list'

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
      <div className={`resume-conatiner ${(isEditing || detail)&&'blur'}`}>
        <div className="resume-list">
          { resumes.map(item => {
            const Resume = list[item.val]
            return (<div className="resume-item" onClick={(e) => this.detail(item.id)} key={item.id}>
              <Resume present={present}/>
            </div>)
          }) }
        </div>
      </div>
  	)
  }
}