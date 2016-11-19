import {Ad, Ed, Tog, Re} from '../actions/types'
import {isUndefined} from '../common'

function creater (initState, handlers) {
  return function reducer( state = initState, action) {
  	if(handlers.hasOwnProperty(action.type)) {
  		return handlers[action.type](state, action)
  	} else {
  		return state
  	}
  }
}

export function createItem(name = 'fun', attrs = ['name', 'val', 'id']){
	return creater({}, {
		[`${Ad}_${name}`](state, action) {
			let res = {}
			attrs.forEach(obj => {
				let attr = obj.name || obj
				let dVal = isUndefined(obj.dVal)

				res[attr] = isUndefined(action[attr], dVal)
			})

			res['hide'] = false;
			return res
		},
		[`${Tog}_${name}`](state, action) {
			if(state.id != action.id) {
				return state
			}

			return Object.assign({}, state, {
				hide: !state.hide
			})
		}
	})
}

export function createList(name = 'fun', item){
	return creater([], {
		[`${Ad}_${name}`](state, action) {
			return [
			  ...state,
			  item(undefined, action)
			]
		},
		[`${Tog}_${name}`] (state, action) {
			return state.map(t =>
			  item(t, action) 
			)
		}
	})
}

export default creater