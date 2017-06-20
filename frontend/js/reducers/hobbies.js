import creater, {createItem, createList} from './createReducer'

const hobby = createItem('hobby', ['name', 'val', 'id', 'desc',{
	name: 'icon',
	dVal: ''
}])
const hobbies = createList('hobby', hobby)

export default hobbies