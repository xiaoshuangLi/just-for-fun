import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Preload from './Preload'
import Bg from './Bg'

import AppExtend from './AppExtend'
import Personal from './Personal'
import Resumes from './Resumes'
import Detail from './Detail'
import Angle from './Angle'
import Prizes from './Prizes'

import Loading from '../components/Loading'

import { setState , icons, imgs, timeout, getFromArr} from '../common'
import * as actions from '../actions'

class App extends AppExtend {
	constructor(props) {
		super(props);
    
    this.setPrize = this.setPrize.bind(this)
		this.leftClick = this.leftClick.bind(this)
		this.disableMobileTouch = this.disableMobileTouch.bind(this)
	}

	componentDidMount() {
		this.start()
		this.loads()
		this.disableMobileTouch()
	}

	start(){
		const { actions , present} = this.props
		actions.edit({isLoaded: false},	 'web')
	}

	loads(){
		let self = this
		let imgs = [...imgs];
		const { actions , present} = self.props

		imgs.push(present.avatar.val)
		present.web.bg && !!~present.web.bg.indexOf('http') && imgs.push(present.web.bg)
		actions.loads(imgs, self.init)
	}

	disableMobileTouch(){
		document.addEventListener('touchmove', function(e){
			if(window.disableTouch) {
				e.preventDefault()
				return
			}
		}, false)
	}

	leftClick(){
		const { actions, present} = this.props
		const { web } = present
		const { isEditing, valid , detail} = web

		if( detail ){
			return actions.edit({detail: ''}, 'web')
		}

		if(isEditing && valid) {
			setState(present)
			this.prizePersonal()
		}

		actions.edit({isEditing: !isEditing},	 'web')
	}

	render() {
		const { present, actions } = this.props
		const { web } = present
		const { isLoaded, isEditing } = web
		const { Style } = icons

		return (
			<div className="body">
			  <Style className="svg-hide" width="0" height="0"/>
{/* 			  <a href="https://github.com/you">
			  	<img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" />
			  </a> */}
				<Loading show={!isLoaded}>
					<Preload present={present}/>
				</Loading>

				<Loading show={isLoaded && web.bg}>
					<Bg present={present}/>
				</Loading>

				<Loading show={isLoaded}>
					<Resumes present={present} actions={actions}/>
				</Loading>

				<Loading show={web.detail}>
					<Detail present={present} actions={actions} setPrize={this.setPrize}/>
				</Loading>

				<Loading show={isLoaded}>
					<Angle left={true} right={true} leftClick={this.leftClick} present={present}/>
				</Loading>

				<Prizes  present={present} actions={actions}/>

				<Loading show={isEditing}>
				  <Personal present={present} actions={actions} setPrize={this.setPrize}/> 
				</Loading>
			</div>
		)
	}
}

export default connect(
	(state) => {
		return {
			present: state.present
		}
	},
	(dispatch) => {
		return {
			actions: bindActionCreators(actions, dispatch)
		}
	}
)(App)