import {Ad, Tog} from '../actions/types'
import creater, {createItem, createList} from './createReducer'

const skill = createItem('skill', ['name', 'val', 'id', {
	name: 'point',
	dVal: 0
}])
const skills = createList('skill', skill)

export default skills