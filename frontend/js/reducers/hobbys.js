import {Ad, Ed, Tog, Re} from '../actions/types'
import creater, {createItem, createList} from './createReducer'

const hobby = createItem('hobby', ['name', 'val', 'id', {
	name: 'icon',
	dVal: 'fa fa-user-secret'
}])
const hobbys = createList('hobby', hobby)

export default hobbys