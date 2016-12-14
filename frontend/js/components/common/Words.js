import React, { Component } from 'react'

export default class Words extends Component {
	constructor(props) {
		super(props)
	}

	getIndex(i){
		const { middle, reverse, text} = this.props
		let l = text.length

		if(middle) {
			let m = l / 2
      
      if(l % 2){
				return i < m ? (m - i - 0.5) : (i - m + 0.5)
      } else {
				return i < m ? (m - i - 1) : (i - m)
      }
		}

		if(reverse) {
			return l - i - 1
		} 

		return i
	}

	render(){
		const { text, className = '', textAfter = '', animation = ''} = this.props

		return (
			<div className = {`words ${className} num-${text.length}`}>
        {text.split('').map((txt, index) => 
        	<span className={`word ${animation}`} key={index} data-index={this.getIndex(index)} data-before={txt} data-after={textAfter[index] || ''} >&emsp;</span>
        )}
			</div>
		)
	}
} 