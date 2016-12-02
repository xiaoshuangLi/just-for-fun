import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Preload from '../components/Preload'
import Resumes from '../components/Resumes'
import Angle from '../components/Angle'
import Loading from '../components/Loading'
import Personal from '../components/Personal'

import { setState } from '../common'
import * as actions from '../actions'

class App extends Component {
	constructor(props) {
		super(props);

		this.enterEdit = this.enterEdit.bind(this)
	}

	componentDidMount() {
		this.start()
		this.loads()
	}

	start(){
		const { actions } = this.props
		actions.edit({isLoaded: false},	 'web')
	}

	loads(){
		const { actions } = this.props
		actions.loads('http://source.cloudin9.com/aojin/img/rice/rule_g.png')
	}

	enterEdit(){
		const { actions, present} = this.props
		const { web } = present
		const { isEditing, valid } = web

		if(isEditing && valid) {
			setState(present)
		}

		actions.edit({isEditing: !isEditing},	 'web')
	}

	render() {
		const { present, actions } = this.props
		const { web } = present
		const { isLoaded, isEditing } = web

		return (
			<div className="body">
				<Loading show={!isLoaded}>
					<Preload present={present}/>
				</Loading>

				<Loading show={isLoaded}>
					<Resumes present={present} />
				</Loading>

				<Loading show={isLoaded}>
					<Angle left={true} right={true} leftClick={this.enterEdit} present={present} />
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