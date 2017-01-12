import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Preload from './Preload'
import Bg from './Bg'

import Personal from './Personal'
import Resumes from './Resumes'
import Detail from './Detail'

import Angle from '../components/Angle'
import Loading from '../components/Loading'

import { setState , icons, imgs} from '../common'
import * as actions from '../actions'

class App extends Component {
	constructor(props) {
		super(props);

		this.leftClick = this.leftClick.bind(this)
	}

	componentDidMount() {
		this.start()
		this.loads()
		this.disableMobileTouch()
	}

	start(){
		const { actions } = this.props
		actions.edit({isLoaded: false},	 'web')
	}

	loads(){
		const { actions , present} = this.props
		let imgs = [...imgs];
		imgs.push(present.avatar.val)
		present.web.bg && !!~present.web.bg.indexOf('http') && imgs.push(present.web.bg)
		actions.loads(imgs)
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
					<Detail present={present} actions={actions}/>
				</Loading>

				<Loading show={isLoaded}>
					<Angle left={true} right={true} leftClick={this.leftClick} present={present} />
				</Loading>

				<Loading show={isEditing}>
				  <Personal present={present} actions={actions}/> 
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