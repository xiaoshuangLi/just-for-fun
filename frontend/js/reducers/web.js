import { Ed, Valid, Invalid } from '../actions/types'
import { dWeb } from '../common/data'

const web = (state = dWeb, action) => {
	const { val } = action
	let invalid

	if(typeof val != 'object') {
		return state;
	}
	
	switch (action.type) {
		case `${Ed}_web`: 
		  return Object.assign({}, state, val)
		// case `${Valid}_web`: 
		//   invalid =  new Set(state.invalid)
		//   invalid.delete(val.attr)

		//   return Object.assign({}, state, {
		//   	invalid
		//   })
		// case `${Invalid}_web`:
		//   invalid =  new Set(state.invalid)
		//   invalid.add(val.attr)

		//   return Object.assign({}, state, {
		//   	invalid
		//   })
		default: 
		  return state
	}
}

export default web