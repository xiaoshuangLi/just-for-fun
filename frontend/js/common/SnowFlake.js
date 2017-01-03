import { calculateDistance } from './canvas'

export default class Spot {
  constructor(x =0 , y = 0, r = 10, scale = 1, rotate = 0,rSpeed = 1, bSpeed = 1, img){
  	this.x = x
  	this.y = y
  	this.r = r
  	this.scale = scale
  	this.rotate = rotate
  	this.rSpeed = rSpeed
  	this.bSpeed = bSpeed
  	this.changing = false
  	this.img = img
  	// this.list = list
  }	

  update(ex = 0, ey = 0, ctx, radio = 2){
  	let self = this
  	const {x, y, r, scale, list} = self
  	const { canvas } = ctx
  	const { width, height } = canvas
  	let distance = calculateDistance(x/radio, y/radio, ex, ey)
  	
	  if(distance <= r * scale) {
	  	if(!self.changing) {
				self.rSpeed = -self.rSpeed
				self.bSpeed = -self.bSpeed
				self.changing = true
	  	}
	  } else {
	  	self.changing = false
	  }

		self.x += self.rSpeed * 0.5
		self.y += self.bSpeed * 0.5
		self.rotate += 0.005

		if(self.x < -r || self.x > (width + r)) {
			self.rSpeed = -self.rSpeed
		}

		if(self.y < -r || self.y > (height + r)) {
			self.bSpeed = -self.bSpeed
		}

  	if(!ctx) {
  		return;
  	}

		// self.gradient = ctx.createRadialGradient(self.x,self.y, r ,self.x,self.y,0)
		// list.map(item => {
		// 	self.gradient.addColorStop(item.val, item.color)
		// })
  }

	render(ctx, radio = 2){
		if(!ctx) {
			return;
		}

		const {x, y, scale, rotate, img, r} = this
  	const { canvas } = ctx
  	const { width, height } = canvas
    
    let circle = 2 * Math.PI
  	let angle = (rotate * circle)%circle;

		ctx.scale(scale, scale)
		// ctx.beginPath();

		let opacity = 1;
		let cH = height * 0.5
		let minCH = height * 0.45

		if(y > minCH) {
			opacity = 1 - (y - minCH)/(cH - minCH)
		}
    ctx.globalAlpha = opacity > 0 ? opacity : 0;

		// ctx.arc(x, y, 100, 0, 2 * Math.PI)
		// ctx.fillStyle = gradient
		// ctx.fill()
		// ctx.stroke();

		let tx = x + r/2
		let ty = y + r/2

		ctx.save();
		ctx.translate(tx, ty);
		ctx.rotate(angle)
		ctx.drawImage(img, -r/2, -r/2, r, r);
		ctx.rotate(0)
		ctx.translate(-tx, -ty);
		ctx.restore();
		ctx.globalAlpha = 1;

    let res = 1/scale
		ctx.scale(res, res)
	}
}