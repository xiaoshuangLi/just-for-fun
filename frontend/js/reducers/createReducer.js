import {Ad, Ed, Tog, Del, Re} from '../actions/types'
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
		},
		[`${Ed}_${name}`](state, action) {
			let { id, valAsId, val } = state
			let validVal = valAsId && val == action.id

			if(id != action.id && !validVal) {
				return state
			}

			if(validVal) {
				let aVal = action.val
				aVal.val = aVal.id
				delete aVal.id
			}

			return Object.assign({}, state, action.val)
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
		[`${Ed}_${name}`] (state, action) {
			return state.map(t =>
			  item(t, action) 
			)
		},
		[`${Tog}_${name}`] (state, action) {
			return state.map(t =>
			  item(t, action) 
			)
		},
		[`${Del}_${name}`] (state, action) {
			return state.filter(t =>
			  (t.id != action.id) 
			)
		}
	})
}

export default creater