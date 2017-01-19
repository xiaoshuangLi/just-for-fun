import { combineReducers } from 'redux'
import undoable from 'redux-undo'

import hobbys from './hobbys'
import words from './words'
import skills from './skills'
import resumes from './resumes'
import prizes from './prizes'
import web from './web'
import prizeOpts from './prizeOpts'
import * as attrs from './attrs'

const app = combineReducers(Object.assign({}, attrs ,{
	hobbys,
	words,
	skills,
	resumes,
	prizes,
	web,
	prizeOpts
}))

export default undoable(app)
