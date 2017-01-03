export function calculateDistance (x = 0, y = 0, x1 = 0, y1 = 0) {
	Math.pow(Math.pow(x - x1, 2) + Math.pow(y - y1, 2), 0.5)
}

export function countSum(list = []){
	return list.reduce((a,b) => a+b, 0)
}

export function random(max = 0, min = 0, limit = []){
  let sum = countSum(limit)

  if(!sum) {
		return Math.random() * (max - min) + min
  }

  let choice = random(sum)
  let index = 0
  let list = limit.map((item, i) => {
  	return countSum(limit.slice(0, i + 1))
  })

  for(let v = 0, l = list.length; v < l; v++) {
  	if(list[v] >= choice) {
  		index = v + 1
  		break; 
  	}
  }

  var gap = (max - min)/limit.length

  return random(min + gap * index, min + gap * (index - 1))
}

export default {
	random,
	calculateDistance
}