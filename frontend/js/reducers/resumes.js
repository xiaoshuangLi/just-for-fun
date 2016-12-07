import creater, {createItem, createList} from './createReducer'

const resume = createItem('resume', ['name', 'val', 'id'])
const resumes = createList('resume', resume)

export default resumes