import {Ad, Ed, Tog, Re} from './types'

let id = 0

export function edit(val, name = 'fun'){
  return { type: `${Ed}_${name}`, val }
};

export function add(data, name = 'fun'){
  return Object.assign({}, { 
    type: `${Ad}_${name}`, 
    id: id++
  }, data)
}

export function toggle(id, name = 'fun'){
  return { 
  	type: `${Tog}_${name}`,
  	id
  }
}