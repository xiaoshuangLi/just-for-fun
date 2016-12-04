import React, { Component } from 'react'
import Jelly from '../animation/Jelly'

import icons from '../../common/icons'


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