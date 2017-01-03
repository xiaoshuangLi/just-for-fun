import React, { Component } from 'react'

export default class Words extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		const {className = '', present, children, txt = false, icon = true, init=false} = this.props

		return (
      <div className={`${init? '' : 'item'} ${className}`} title={present.phone.val}>
        {icon && <div className="icon fa fa-mobile"></div>}
        {txt && <div className="title">手机</div>}
        <a className="desc" href={`tel:${present.phone.val}`}>{present.phone.val}</a>
      </div>
		)
	}
} 