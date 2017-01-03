import creater, {createItem, createList} from './createReducer'

const hobby = createItem('hobby', ['name', 'val', 'id', 'desc',{
	name: 'icon',
	dVal: ''
}])
const hobbys = createList('hobby', hobby)

export default hobbys