import bg from '../../img/bg.jpg'
import one from '../../img/resumes/One/img.jpeg'

const imgs = [bg, one]

export function getBg(url = ''){
	if(!url) {
		return bg
	}

	if(!~url.indexOf('http')) {
		return bg
	}

	return url
}

export default imgs