import React, { Component } from 'react'
import TransitionGroup from 'react-addons-transition-group'
import { TweenLite } from 'gsap'
// import Jelly from './animation/Jelly'

var ele = document.getElementById('app');
var test =  TweenLite.from(ele, 1.5, {opacity:0, x: 1000,delay:0});

class Loading extends Component {
	constructor(props) {
		super(props)
	}

	componentWillEnter(callback){
	  console.log(111)
	  callback()
	}

	componentWillLeave(callback){
		console.log(222)
		callback()
	}

	render() {
		return <div className="loading-conatiner">wwwweewew</div>
	}
}

export default class Res extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: true
		}
	}

	componentDidMount() {
		setTimeout(() => {
			console.log(3333);
			this.setState({show: false})
		}, 1000)
	}

	render() {
		return (
			<div className='loading-conatiner'>
				<TransitionGroup>
					{ this.state.show && <Loading />}
				</TransitionGroup>
			</div>
		)
	}
}