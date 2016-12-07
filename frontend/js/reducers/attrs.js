import { Ed } from '../actions/types'
import creater from './createReducer'

const attr = function(name = 'fun', title: '晓爽') {
	return creater({name: title}, {
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
export const experience = attr('experience', '项目经验')
export const avatar = attr('avatar', '头像')
export const editing = attr('editing', '种族天赋')

const attrs = {
	name,
	birthday,
	email,
	phone,
	education,
	school,
	desc,
	experience,
	avatar,
	editing
}

export default attrs