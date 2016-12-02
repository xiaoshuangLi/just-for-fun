import { loadAll } from '../common' 
import { Valid, Invalid } from './types'
import { validAttr } from '../common'

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

// export function valid(val, name = 'func') {
// 	let validRes = validAttr(val, name)
// 	const { id = '' } = val

// 	return {
// 		type: `${validRes?Valid:Invalid}_web`, 
// 		val : {
// 			attr: `name${id&&'.'}${id}`
// 		}
// 	}
// }

// export function edit(val, name = 'func') {
// 	return (dispatch, getState) => {

// 		dispatch(valid(val, name))
// 		return dispatch(editSingle(val, name))
// 	}
// }

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

function load(url, cb) {
	if (!url || !cb) {
		return cb && cb()
	}

	let img = new Image()
	img.src = url

	img.onload = cb
	img.onerror = cb
}

export function loads(list = []) {
	return (dispatch, getState) => {
		let num = 0
		list = list instanceof Array ? list : [list]

		const urls = list.map(item => (item.url || item));
		loadAll(urls, () => {
			return setTimeout(() => {
				dispatch({ type: `${Ed}_web`, val: { isLoaded: true }})
			}, 1000)
		})
	}
}
