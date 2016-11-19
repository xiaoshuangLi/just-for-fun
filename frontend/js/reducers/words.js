import {Ad, Tog} from '../actions/types'
import creater, {createItem, createList} from './createReducer'

const word = createItem('word', ['name', 'val', 'id'])
const words = createList('word', word)

export default words