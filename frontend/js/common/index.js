import data from './data'
import icons from './icons'
import imgs from './imgs'

const { dWeb, resumes } = data

export {
	data,
	icons,
	imgs
}

export function load(src = '', cb){
	if(!src) {
		return cb && cb()
	}
	let img = new Image()
	img.src = src

	img.onload = cb;
	img.onerror = cb;
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

export function getState(){
	let data = window.localStorage.getItem('JFF')
	return  JSON.parse(data || '{}')
}

export function setState(data = {}){
	data = Object.assign({}, data, {web: dWeb, resumes})
	window.localStorage.setItem('JFF', JSON.stringify(data))
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

export function getFromArr(arr = [],attr = 'id', val = '', index = false ) {

	for( let v = 0, l = arr.length; v <= l; v++ ) {
		let item = arr[v]
		if(item[attr] === val) {
			return index ? i : item
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