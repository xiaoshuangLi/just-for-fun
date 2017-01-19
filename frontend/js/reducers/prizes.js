import creater, {createItem, createList} from './createReducer'

const prize = createItem('prize', ['name', 'val', 'desc','id', {
	name: 'got',
	dVal: false
}, {
	name: 'Icon',
	dVal: 'Trophy'
}])
const prizes = createList('prize', prize)

export default prizes