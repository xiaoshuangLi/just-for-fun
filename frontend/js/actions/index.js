import { loadAll , timeout} from '../common' 
import { Valid, Invalid } from './types'

import {
	Ad,
	Ed,
	Tog,
	Re,
	Del
} from './types'

let id = new Date().getTime()

export function edit(val, name = 'fun') {
	const {id} = val
	return {
		type: `${Ed}_${name}`,
		id,
		val
	}
}

export function add(data, name = 'fun') {
	return Object.assign({}, {
		type: `${Ad}_${name}`,
		id: id++
	}, data)
}

export function toggle(id, name = 'fun') {
	return {
		type: `${Tog}_${name}`,
		id
	}
}

export function del(id, name = 'fun') {
	return {
		type: `${Del}_${name}`,
		id
	}
}

export function loads(list = [], cb) {
	return (dispatch, getState) => {
		let num = 0
		list = list instanceof Array ? list : [list]

		const urls = list.map((item = '') => (item.url || item))
		loadAll(urls, () => {
			return timeout(() => {
				dispatch({ type: `${Ed}_web`, val: { isLoaded: true }})
				cb && cb()
			}, 1000)
		})
	}
}
