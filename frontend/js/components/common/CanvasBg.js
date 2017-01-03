import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import { timeout, load, SnowFlake, canvas } from '../../common'
import src from '../../../img/icon/snowflake.svg'

const { random } = canvas

let cva, ctx
let ratio = window.devicePixelRatio
let lineColor = 'rgba(0,0,0,0)'
let lineWidth = 0
let max = 160
let ex = w/2, ey = h/2
let r = 15

let w, h , snow = [], animationId 
// let list = [
//   {val: 0, color: 'rgba(255,255,255,0)'},
//   {val: 0.2, color: 'rgba(255,155,155,0)'},
//   {val: 0.5, color: 'rgba(255,210,210,0.05)'},
//   {val: 1, color: 'rgba(255,210,210,0.1)'}
// ]

function createSnow(img){
	for(let v = 0; v < max; v++) {
		let tx = random(w * ratio, 0, [1, 5, 1, 1])
		let ty = random(h * ratio, 0, [5,4,3,2])
		let tScale = random(2 - ty/h, 1)
		let rotate = random(1)

		snow[v] = new SnowFlake(tx, ty, r, tScale, rotate,random(1, -1), random(1, -1), img)
		// snow[v] = new SnowFlake(tx, ty, r, tScale, rotate,random(1, -1), random(1, -1), list)
	}
}

function renderCanvas(stop){
	ctx.fillStyle = '#fff';
	ctx.fillRect(0, 0, w * ratio, h * ratio);

	snow.forEach(item => {
		item.update(ex, ey, ctx, ratio)
		item.render(ctx, ratio)
	})

	if(stop) {
		return;
	}

  animationId = requestAnimationFrame(()=>{
  	renderCanvas(stop)
  })
}

export default class CanvasBg extends Component {
	constructor(props) {
		super(props)

		this.mouseMove = this.mouseMove.bind(this)
	}

	createCanvas(){
		let ele = findDOMNode(this)
		let cva = document.createElement('CANVAS')

    w = ele.clientWidth
    h = ele.clientHeight

		cva.setAttribute('width', `${w*2}px`)
		cva.setAttribute('height', `${h*2}px`)

		cva.style.width = `${w}px`
		cva.style.height = `${h}px`

		return cva
	}

	initCanvas(){
		const { present, stop } = this.props

		let ele = findDOMNode(this)

		cva.style.width = w + "px";
	  timeout(() => {
			cva.style.height = h + "px";
		});

		cva.width = w * ratio;
		cva.height = h * ratio;

		ctx = cva.getContext('2d');
		ctx.strokeStyle = lineColor
		ctx.lineWidth = lineWidth

		load( src, img => {
			createSnow(img)
			renderCanvas(stop)
		})
	}

	componentDidMount(){
		let ele = findDOMNode(this)

		cva = this.createCanvas()
		ele.appendChild(cva)
		this.initCanvas();
	}

	componentWillUnmount(){
		if(animationId) {
			cancelAnimationFrame(animationId)
		}
	}

	mouseMove(e) {
		ex = parseInt(e.clientX)
		ey = parseInt(e.clientY)
	}

	render(){
		const { className = '' } = this.props

		return(
			<div className={`canvas-container ${className}`} onMouseMove={e => this.mouseMove(e)}></div>
		)
	}
}