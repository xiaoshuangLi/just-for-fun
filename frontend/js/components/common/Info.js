import React, { Component } from 'react'

import Phone from './Phone'
import Email from './Email'

export default class Words extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		const {className = '', present, children, txt = false, icon = true} = this.props
    const data = Object.assign({}, this.props, {className: ''})

		return (
			<div className = {className}>
			  {children && children}
        <Phone {...data}/>
        <Email {...data}/>
        <div className="item" title={present.birthday.val}>
          {icon && <div className="icon fa fa-birthday-cake"></div>}
          {txt && <div className="title">生日</div>}
          <div className="desc">{present.birthday.val}</div>
        </div>
        <div className="item" title={`${present.education.val} ${present.email.val}`}>
          {icon && <div className="icon fa fa-university"></div>}
          {txt && <div className="title">学历</div>}
          <div className="desc">{present.education.val}&emsp;{present.school.val}</div>
        </div>
			</div>
		)
	}
} 