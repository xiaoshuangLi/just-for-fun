import React, { Component } from 'react'

import Loading from '../components/Loading'
import Prize from '../components/Prize'
import { Delay } from '../components/common'
import { Slide } from '../components/animation'

export default class Prizes extends Component {
	constructor(props) {
		super(props)
	}

	prizes (){
		const { present, actions } = this.props
		const list = present.prizeOpts.curr
		let res = []

		for(let item of list) {
			res.push(
				<Loading show={true} key={item}>
					<Prize present={present} actions={actions} id={item} ready={true}/>
				</Loading>
			)
		}

		return res
	}

	render() {

		return (
			<div className="prize-list">
			  { this.prizes() }
			</div>
		)
	}
}