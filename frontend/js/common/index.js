import data, { dWeb, dPrizeOpts } from './data'
import icons from './icons'
import imgs from './imgs'

import SnowFlake from './SnowFlake'
import canvas from './canvas'

const { resumes } = data

export {
	data,
	icons,
	imgs,
	SnowFlake,
	canvas
}

export function load(src = '', cb){
	if(!src) {
		return cb && cb()
	}
	let img = new Image()
	img.src = src

	img.onload = () => {
		cb&&cb(img)
	};
	img.onerror = () => {
		cb&&cb(img)
	};
}

export function loadAll(list = [], cb){
	typeof list == 'string' && (list = [list])

	if(!list.length) {
		return cb && cb()
	}

	let num = 0
	let len = list.length

	list.map(img => {
		load(img, () => {
			num++

			if(num >= len) {
				return cb && timeout(cb)
			}
		})
	})
}

export function getExtendPrizes(state, data){
	return data.prizes.map(item => {
		let res = getFromArr(state.prizes, 'id', item.id)
		return res.id ? res : item
	})
}

export function getDefaultOpts(full, state, data){
	let count = state.prizeOpts ? state.prizeOpts.count : 0
	let prizeOpts = Object.assign({}, dPrizeOpts, {count, curr: new Set()})

	let res = {
		web: dWeb,
		resumes,
		prizeOpts
	}
  
  full && (res.prizes = getExtendPrizes(state, data))

  return res 
}

export function getState(){
	let data = window.localStorage.getItem('JFF')
	return  JSON.parse(data || '{}')
}

export function setState(data = {}){
	data = Object.assign({}, data, getDefaultOpts(false, data))
	window.localStorage.setItem('JFF', JSON.stringify(data))
}

export function getPresent(){
	const state = getState()
	return Object.assign({}, data, state, getDefaultOpts(true, state, data))
}

export function isUndefined(val, dVal = '') {
	return val === undefined ? dVal : val
}

function valid(el){
	if(!el) {
		return true
	}

	if(el.checkValidity) {
		return el.checkValidity()
	}

	return true
}

export function validInput(el){
	if(!el) {
		return true
	}

	if(el.checkValidity) {
		return el.checkValidity()
	}

	let eles = el.querySelectorAll('*')

	for(let v = 0, l = eles.length; v <= l ; v++) {
		if(!valid(eles[v])) {
			return false
		}
	}

	return true
}

export function map(list = [], cb) {
	for(let v = 0, l = list.length; v < l; v++ ) {
		cb&&cb(list[v])
	}
}

export function getChildren(ele, parent) {
	ele = ele.length ? ele : [ele]

	let list = [];
	map(ele, curr => {
		let children = curr.children || []

		map(children, child => {
			list.push(child)
		})

		parent === -1 && list.unshift(curr)
		parent === 1 && list.push(curr)
	})

	return list
}

export function getChildrenByLevel(ele = document, level = 1, parent = 0) {
  let list = ele.length ? ele : [ele]

  for(let v = 0; v <= level; v++) {
  	list = getChildren(list, parent)
  }

  return list
}

export function getFromArr(arr = [],attr = 'id', val = '', index = false ) {

	for( let v = 0, l = arr.length; v < l; v++ ) {
		let item = arr[v]

		if(item[attr] === val) {
			return index ? v : item
		}
	}

	return index ? -1 : {}
}

export function timeout(cb, time) {
	if (!cb) {
		return;
	}
	time = time || 0;

	var timeout = setTimeout(function() {
		cb();
		clearTimeout(timeout);
	}, time)
}

export function getStyles(ele = '', attr = '') {
	if(!ele || !attr) {
		return '';
	}
	let view = ele.ownerDocument.defaultView

	if ( !view || !view.opener ) {
		view = window
	}

	let res = view.getComputedStyle(ele)

	return res[attr] || ''
}

export function winPrize(val = '', list = [], cb) {
	let item = getFromArr(list, 'val', val)

	if(!item.id || item.got) {
		return;
	}

	cb && cb(item)
}

export class Animate {
	constructor(props) {
		const { func, stopFunc, cb } = props

		this.func = func
		this.stopFunc = stopFunc
		this.cb = cb

		this.start = this.start.bind(this)
	}

	start(){
		let self = this
		const { func, stopFunc, cb, start, id} = self
		let stop = stopFunc()

		func && func()

		if(stop && id) {
			cb && cb()
			window.cancelAnimationFrame(id)
			self = null

			return
		}

		this.id = window.requestAnimationFrame(start)
	}
}

export const validAttrs = {
  name: {
  	minLength: 0,
  	maxLength: 8,
  },
  birthday: {
  	minLength: 0,
  	maxLength: 16,
  },
  phone: {
  	pattern: '^1\\d{10}$'
  },
  email: {
  	pattern: '^(\\w-*\\.*)+@(\\w-?)+(\\.\\w{2,})+$',
  	minLength: 0,
  	maxLength: 64,
  },
  education: {
  	minLength: 0,
  	maxLength: 8,
  },
  school: {
  	minLength: 0,
  	maxLength: 16,
  },
  desc: {
  	minLength: 0,
  	maxLength: 140,
  },
  experience: {
  	minLength: 0,
  	maxLength: 140,
  },
  wanna: {
  	minLength: 0,
  	maxLength: 8,
  },
}