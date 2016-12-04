import React, { Component } from 'react'
import Slowshow from '../animation/Slowshow'

export default class Resumes extends Slowshow {
  render(){
  	const { present } = this.props;
  	
  	return(
  		<div className="resume-list">
	  		<div className="resume-item">1</div>
	  		<div className="resume-item">2</div>
	  		
  		</div>
  	)
  }
}