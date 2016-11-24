import React, { Component } from 'react'
import { TransitionGroup } from 'react-addons-transition-group'

class Jelly extends TransitionGroup{
	constructor(props) {
		super(props);
	}
	render(){
		return (<div></div>)
	}
}

Jelly.defaultProps = {
}

export default Jelly