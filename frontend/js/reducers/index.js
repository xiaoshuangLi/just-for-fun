// import * from '../actions'
import { combineReducers } from 'redux'
import undoable from 'redux-undo'

import hobbys from './hobbys'
import words from './words'
import skills from './skills'
import * as attrs from './attrs'

const app = combineReducers(Object.assign({}, attrs ,{
	hobbys,
	words,
	skills
}))

export default undoable(app)
