import React, { Component } from 'react'
import Flod from '../animation/Flod'

export default class Angle extends Flod {
	render(){
		const {left, right, leftClick, rightClick, present} = this.props
		const {web} = present
		const {isEditing, valid, detail} = web

		return (
			<div className="left-icon angle">
				{left && <div className={`top pointer ${(isEditing || detail)&&'active'} ${detail&&'rotate'} ${!valid&&'invalid'}`} onClick={leftClick}>
					<div className="icon fa fa-pencil-square"></div>
					<div className="icon fa fa-times-circle"></div>
				</div>}
				{right && <div onClick={rightClick} className="bottom"></div>}
      </div>
		)
	}
}