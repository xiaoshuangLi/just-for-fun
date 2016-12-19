import React, { Component } from 'react'
import {Jelly} from '../components/animation'

import {icons} from '../common'


class Preload extends Jelly {
	render(){
		const { Resume } = icons

		return (
			<div className="loading-container">
			  <Resume width="50%" height="50%"/>
			</div>
		)
	}
}

export default Preload