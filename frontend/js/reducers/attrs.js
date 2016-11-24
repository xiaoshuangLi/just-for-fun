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
export const email = attr('email', '邮箱')
export const phone = attr('phone', '手机')
export const education = attr('education', '学历')
export const school = attr('school', '学校')
export const desc = attr('desc', '自我介绍')
export const experience = attr('experience', '醒目经验')

const attrs = {
	name,
	birthday,
	email,
	phone,
	education,
	school,
	desc,
	experience
}

export default attrs