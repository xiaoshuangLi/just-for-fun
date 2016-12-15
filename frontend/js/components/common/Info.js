import React, { Component } from 'react'

export default class Words extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		const {className = '', present, children, txt = false, icon = true} = this.props

		return (
			<div className = {className}>
			  {children && children}
        <div className="item" title={present.email.val}>
          {icon && <div className="icon fa fa-envelope-o"></div>}
          {txt && <div className="title">邮箱</div>}
          <a className="desc">{present.email.val}</a>
        </div>
        <div className="item" title={present.phone.val}>
          {icon && <div className="icon fa fa-mobile"></div>}
          {txt && <div className="title">手机</div>}
          <a className="desc">{present.phone.val}</a>
        </div>
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