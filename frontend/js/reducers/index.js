// import * from '../actions'
import { combineReducers } from 'redux'

import hobbys from './hobbys'
import words from './words'
import skills from './skills'
import attrs from './attrs'

const { birthday, education, name } = attrs

const app = combineReducers({
	birthday,
	education,
	name,
	hobbys,
	words,
	skills
})

export default app
