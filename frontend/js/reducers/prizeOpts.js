import { Ed } from '../actions/types'
import { dPrizeOpts } from '../common/data'

const prizeOpts = (state = dPrizeOpts, action) => {
	const { val } = action

	if(typeof val != 'object') {
		return state;
	}
	
	switch (action.type) {
		case `${Ed}_prizeOpts`: 
		  return Object.assign({}, state, val)
		default: 
		  return state
	}
}

export default prizeOpts