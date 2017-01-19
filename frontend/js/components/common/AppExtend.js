import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import { getFromArr, timeout, winPrize, setState, data} from '../common'

let now = new Date()
let opts = {}

export default class PrizeExtend extends Component{
	constructor(props) {
		super(props);

		this.init = this.init.bind(this)
		this.setPrize = this.setPrize.bind(this)
  }

	init(){
		const self = this

		self.initOpts()
		self.initCount()

		timeout(() => {
			self.setPrize()
			self.prizeTime()
			self.prizeDate()
			self.prizeCount()
		}, 2500)
	}

	initOpts(){
		const { present } = this.props

		opts = {
			time: [
			  { min: 6, max: 8, prize: 'Morning'},
			  { min: 18, max: 20, prize: 'Eat'},
			  { min: 0, max: 2, prize: 'Night'},
			],
			date: [
			  { val: present.prizeOpts.birthday, prize: 'MyBirthday'},
			  { val: present.birthday.val, prize: 'Birthday'}
			]
		}
	}

	initCount(){
		const { present, actions} = this.props

		actions.edit({ count: present.prizeOpts.count + 1}, 'prizeOpts')
		setState(this.props.present)
	}

	setPrize(val = 'Welcome'){
		const { actions, present} = this.props

		winPrize(val, present.prizes, (item) => {
			actions.edit({ id: item.id, got: true }, 'prize')
			actions.edit({ curr: present.prizeOpts.curr.add(item.id) }, 'prizeOpts')
		})

		setState(this.props.present)
	}

	prizeTime(){
		let hour = now.getHours()

		for(let item of opts.time) {
			let {min, max, prize} = item

			if(hour < min || hour >= max) {
				continue
			}

			return this.setPrize(prize)
		}
	}

	prizeDate(){
		let cDay = now.getDate()
		let cMonth = now.getMonth()

		for(let item of opts.date) {
			let {val, prize} = item
			let date = new Date(val)

			let day = date.getDate()
			let month = date.getMonth()

			if(day == cDay && cMonth == month) {
				return this.setPrize(prize) 
			}
		}
	}

	prizeCount(){
		const { present } = this.props

		if(present.prizeOpts.count < 10) {
			return
		}

		this.setPrize('Friend')
	}
}
