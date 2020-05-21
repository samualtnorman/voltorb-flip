import "./style.css"

import srcBackground from "./assets/background.png"
import srcTileBlank from "./assets/tile/blank.png"
import srcTileHover from "./assets/tile/hover.png"
import srcTile1 from "./assets/tile/1.png"

interface LooseObject<T = any> {
	[key: string]: T | undefined
}

const body = document.getElementsByTagName("body")[0]
const canvas = body.appendChild(document.createElement("canvas"))

canvas.width = 262
canvas.height = 397

const context = canvas.getContext("2d")

let scale = 1

onresize = () => {
	updateSize()
}

class Sprite {
	x: number
	y: number
	priority: number
	visible: boolean
	image: HTMLImageElement | undefined

	constructor({ x = 0, y = 0, priority = 0, visible = true, image }: Partial<Sprite>, src?: string) {
		this.x = x
		this.y = y
		this.priority = priority
		this.visible = visible
		
		if (src)
			this.image = Sprite.getImage(src)
		else
			this.image = image

		Sprite.sprites.push(this)
	}

	draw() {
		this.visible && context && this.image &&
			context.drawImage(this.image, this.x, this.y)
	}

	pointOverlaps(x: number, y: number) {
		return this.image && x > this.x && x < this.x + this.image.width && y > this.y && y < this.y + this.image.height
	}

	static sprites: Sprite[] = []

	static drawAll() {
		Sprite.sprites.sort((a, b) => a.priority - b.priority)

		for (const sprite of Sprite.sprites)
			sprite.draw()
	}

	static images: LooseObject<HTMLImageElement> = {}

	static getImage(src: string) {
		let image = Sprite.images[src]

		if (image)
			return image

		image = new Image
		image.src = src
		
		return image
	}
}

class Tile {
	sprite = new Sprite({}, srcTileBlank)
	value = 1
	revealed = false
}

new Sprite({}, srcBackground)

const tileHover = new Sprite({ visible: false, priority: 1 }, srcTileHover)
const tiles: Tile[] = []
const debug = true

for (let i = 0; i < 25; i++) {
	const tile = new Tile
	tiles.push(tile)
	tile.sprite.x = 12 + i % 5 * 32
	tile.sprite.y = 202 + Math.floor(i / 5) * 32
}

updateSize()
drawLoop()

function drawLoop() {
	if (context) {
		context.clearRect(0, 0, canvas.width, canvas.height)

		Sprite.drawAll()
	}

	requestAnimationFrame(drawLoop)
}

function updateSize() {
	scale = Math.min(window.innerHeight / canvas.height, window.innerWidth / canvas.width)

	if (scale > 1)
		scale = Math.floor(scale)

	canvas.style.height = `${canvas.height * scale}px`
	canvas.style.width = `${canvas.width * scale}px`
}

canvas.onmousemove = ({ clientX, clientY }) => {
	const x = (clientX - canvas.offsetLeft) / scale
	const y = (clientY - canvas.offsetTop) / scale

	tileHover.visible = false

	for (const tile of tiles) {
		if (tile.sprite.pointOverlaps(x, y)) {
			tileHover.x = tile.sprite.x - 3
			tileHover.y = tile.sprite.y - 3
			tileHover.visible = true

			break
		}
	}
}

canvas.onmouseup = ({ clientX, clientY }) => {
	const x = (clientX - canvas.offsetLeft) / scale
	const y = (clientY - canvas.offsetTop) / scale

	for (const tile of tiles) {
		if (tile.sprite.pointOverlaps(x, y)) {
			tile.sprite.image = Sprite.getImage(srcTile1)

			break
		}
	}
}

canvas.onmouseleave = canvas.onmousemove
