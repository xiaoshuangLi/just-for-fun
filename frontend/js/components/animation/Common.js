import React, { Component } from 'react'

export default class Slowshow extends Component {
	constructor(props) {
		super(props)

		this.closeComponent = this.closeComponent.bind(this)
	}

	aIn(cb){
		cb && cb()
	}

	aOut(cb){
		cb && cb()
	}

	closeComponent(cb){
		this.aOut(cb)
	}

	componentWillEnter(cb){
		!this.props.ready && this.aIn(cb)
	}

	componentWillLeave(cb) {
		!this.props.ready && this.aOut(cb)
	}

	componentDidMount(cb){
		this.props.ready && this.aIn(cb)
	}

	render () {
    return (
    	<div>{this.props.children || null}</div>
    )
	}
}