import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

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
					<HobbyItem />
					<HobbyItem data={{icon: 'Camera'}}/>
					<HobbyItem data={{icon: 'Computer'}}/>
					<HobbyItem data={{icon: 'Cook'}}/>
					<HobbyItem data={{icon: 'Gamepad'}}/>
					<HobbyItem data={{icon: 'Movie'}}/>
					<HobbyItem data={{icon: 'Music'}}/>
					<HobbyItem data={{icon: 'Plant'}}/>
				  {data.map(item => <HobbyItem key={item._id} data={item} />)}
				</div>
			</div>
		)
	}
}