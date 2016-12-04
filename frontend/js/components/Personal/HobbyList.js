import React, { Component } from 'react'

import HobbyItem from './HobbyItem'

export default class HobbyList extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		const { data, toggle } = this.props

		return(
			<div className="input-item hobby">
				<label className="active label" content='个人爱好'></label>
				<div className="hobby-list">
				  {data.map(item => <HobbyItem toggle={toggle} key={item.id} data={item} />)}
				</div>
			</div>
		)
	}
}