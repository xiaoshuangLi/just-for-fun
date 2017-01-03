import React, { Component } from 'react'

export default class Words extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		const {className = '', present, children, txt = false, icon = true, init=false} = this.props

		return (
      <div className={`${init? '' : 'item'} ${className}`} title={present.email.val}>
        {icon && <div className="icon fa fa-envelope-o"></div>}
        {txt && <div className="title">邮箱</div>}
        <a className="desc" href={`mailto:${present.email.val}`}>{present.email.val}</a>
      </div>
		)
	}
} 