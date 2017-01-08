import React, { Component } from 'react'
import {Jelly} from '../components/animation'

import {icons} from '../common'


class Preload extends Jelly {
	render(){
		const { Resume } = icons

		return (
			<div className="loading-container">
			  <Resume width="60px" height="60px"/>
			</div>
		)
	}
}

export default Preload