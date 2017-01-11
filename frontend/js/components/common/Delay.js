import react, { Component } from 'react'

export default class Delay extends Component {
	constructor(props) {
		super(props)

		this.state = {
			waiting: true
		}
	}

	componentDidMount(){
		let self = this
		const { wait = 0} = self.props

    self.timer = setTimeout(() => {
      self.setState({
        waiting: false
      });
    }, wait)
	}

	componentWillUnmount(){
    clearTimeout(this.timer)
	}

	render(){
		return this.state.waiting ? null : this.props.children
	}
}
