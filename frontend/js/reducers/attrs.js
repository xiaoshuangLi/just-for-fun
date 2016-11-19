import { Ed } from '../actions/types'
import common from '../common'
import creater from './createReducer'

const attr = function(name = 'fun', title: '晓爽') {
	return creater({}, {
		[`${Ed}_${name}`] (state, action) {
			return Object.assign({}, state, {
				name: title,
				val: action.val,
			})
		}
	})
}

export const name = attr('name', '姓名')
export const birthday = attr('birthday', '生日')
export const education = attr('education', '学历')

const attrs = {
	name,
	birthday,
	education
}

export default attrs