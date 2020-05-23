import "./style.css"

import srcBackground from "./assets/background.png"
import srcTileBlank from "./assets/tile/blank.png"
import srcTileHover from "./assets/tile/hover.png"
import srcTileFlip0 from "./assets/tile/flip_0.png"
import srcTileFlip1 from "./assets/tile/flip_1.png"
import srcTile1Flip from "./assets/tile/1_flip.png"
import srcTile1 from "./assets/tile/1.png"
import srcTile2Flip from "./assets/tile/2_flip.png"
import srcTile2 from "./assets/tile/2.png"
import srcTile3Flip from "./assets/tile/3_flip.png"
import srcTile3 from "./assets/tile/3.png"
import srcTile0Flip from "./assets/tile/voltorb_flip.png"
import srcTile0 from "./assets/tile/voltorb.png"
import srcExplode0 from "./assets/tile/explode_0.png"
import srcExplode1 from "./assets/tile/explode_1.png"
import srcExplode2 from "./assets/tile/explode_2.png"
import srcExplode3 from "./assets/tile/explode_3.png"
import srcExplode4 from "./assets/tile/explode_4.png"
import srcExplode5 from "./assets/tile/explode_5.png"
import srcExplode6 from "./assets/tile/explode_6.png"
import srcExplode7 from "./assets/tile/explode_7.png"
import srcExplode8 from "./assets/tile/explode_8.png"
import srcMissing from "./assets/missing.png"
import srcNumberBold0 from "./assets/number/bold_0.png"
import srcNumberBold1 from "./assets/number/bold_1.png"
import srcNumberBold2 from "./assets/number/bold_2.png"
import srcNumberBold3 from "./assets/number/bold_3.png"
import srcNumberBold4 from "./assets/number/bold_4.png"
import srcNumberBold5 from "./assets/number/bold_5.png"
import srcNumberBold6 from "./assets/number/bold_6.png"
import srcNumberBold7 from "./assets/number/bold_7.png"
import srcNumberBold8 from "./assets/number/bold_8.png"
import srcNumberBold9 from "./assets/number/bold_9.png"
import srcNumberBig0 from "./assets/number/big_0.png"
import srcNumberBig1 from "./assets/number/big_1.png"
import srcNumberBig2 from "./assets/number/big_2.png"
import srcNumberBig3 from "./assets/number/big_3.png"
import srcNumberBig4 from "./assets/number/big_4.png"
import srcNumberBig5 from "./assets/number/big_5.png"
import srcNumberBig6 from "./assets/number/big_6.png"
import srcNumberBig7 from "./assets/number/big_7.png"
import srcNumberBig8 from "./assets/number/big_8.png"
import srcNumberBig9 from "./assets/number/big_9.png"
import srcButtonMemoOpen from "./assets/button/memo/open.png"
import srcButtonMemoClose from "./assets/button/memo/close.png"
import srcButtonMemoOpenPress from "./assets/button/memo/open_press.png"
import srcButtonMemoClosePress from "./assets/button/memo/close_press.png"
import srcMemoFrame from "./assets/memo/frame.png"
import srcButtonMemo0On from "./assets/button/memo/0_on.png"
import srcButtonMemo0Off from "./assets/button/memo/0_off.png"
import srcButtonMemo1On from "./assets/button/memo/1_on.png"
import srcButtonMemo1Off from "./assets/button/memo/1_off.png"
import srcButtonMemo2On from "./assets/button/memo/2_on.png"
import srcButtonMemo2Off from "./assets/button/memo/2_off.png"
import srcButtonMemo3On from "./assets/button/memo/3_on.png"
import srcButtonMemo3Off from "./assets/button/memo/3_off.png"
import srcMemo0 from "./assets/memo/0.png"
import srcMemo1 from "./assets/memo/1.png"
import srcMemo2 from "./assets/memo/2.png"
import srcMemo3 from "./assets/memo/3.png"
import srcMemoPress from "./assets/memo/press.png"
import srcMemoHover from "./assets/memo/hover.png"
import srcButtonMemoHover from "./assets/button/memo/hover.png"
import srcMusic from "./assets/music.mp3"
import srcNumberThin1 from "./assets/number/thin_1.png"
import srcNumberThin2 from "./assets/number/thin_2.png"
import srcNumberThin3 from "./assets/number/thin_3.png"
import srcNumberThin4 from "./assets/number/thin_4.png"
import srcNumberThin5 from "./assets/number/thin_5.png"
import srcNumberThin6 from "./assets/number/thin_6.png"
import srcNumberThin7 from "./assets/number/thin_7.png"
import srcNumberThin8 from "./assets/number/thin_8.png"

const imageSrcs = [
	srcMissing,
	srcBackground,
	srcTileBlank,
	srcTileHover,
	srcTileFlip0,
	srcTileFlip1,
	srcTile1Flip,
	srcTile1,
	srcTile2Flip,
	srcTile2,
	srcTile3Flip,
	srcTile3,
	srcTile0Flip,
	srcTile0,
	srcExplode0,
	srcExplode1,
	srcExplode2,
	srcExplode3,
	srcExplode4,
	srcExplode5,
	srcExplode6,
	srcExplode7,
	srcExplode8,
	srcNumberBold0,
	srcNumberBold1,
	srcNumberBold2,
	srcNumberBold3,
	srcNumberBold4,
	srcNumberBold5,
	srcNumberBold6,
	srcNumberBold7,
	srcNumberBold8,
	srcNumberBold9,
	srcNumberBig0,
	srcNumberBig1,
	srcNumberBig2,
	srcNumberBig3,
	srcNumberBig4,
	srcNumberBig5,
	srcNumberBig6,
	srcNumberBig7,
	srcNumberBig8,
	srcNumberBig9,
	srcButtonMemoOpen,
	srcButtonMemoClose,
	srcButtonMemoOpenPress,
	srcButtonMemoClosePress,
	srcMemoFrame,
	srcButtonMemo0On,
	srcButtonMemo0Off,
	srcButtonMemo1On,
	srcButtonMemo1Off,
	srcButtonMemo2On,
	srcButtonMemo2Off,
	srcButtonMemo3On,
	srcButtonMemo3Off,
	srcMemo0,
	srcMemo1,
	srcMemo2,
	srcMemo3,
	srcMemoPress,
	srcMemoHover,
	srcButtonMemoHover,
	srcNumberThin1,
	srcNumberThin2,
	srcNumberThin3,
	srcNumberThin4,
	srcNumberThin5,
	srcNumberThin6,
	srcNumberThin7,
	srcNumberThin8
]

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
	imageSrc: string

	constructor({ x = 0, y = 0, priority = 0, visible = true, imageSrc = "" }: Partial<Sprite> = {}) {
		this.x = x
		this.y = y
		this.priority = priority
		this.visible = visible
		this.imageSrc = imageSrc

		Sprite.sprites.push(this)
	}

	draw() {
		this.visible && context && this.image &&
			context.drawImage(this.image, this.x, this.y)
	}

	overlapsPoint(x: number, y: number) {
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

		return Sprite.images[srcMissing]

		// throw new Error(`image '${src}' was unloaded`)

		// let image = Sprite.images[src]

		// if (image)
		// 	return image

		// image = new Image
		// image.src = src

		// return image
	}

	get image() {
		return Sprite.getImage(this.imageSrc)
	}

	static loadImage(src: string) {
		let image = new Image
		image.src = src
		return Sprite.images[src] = image
	}
}

for (const src of imageSrcs)
	Sprite.loadImage(src)

class Tile {
	sprite: Sprite
	value: number
	flipped = false
	memos: Sprite[] = []

	constructor(value: Tile["value"], x: number, y: number) {
		this.value = value
		this.sprite = new Sprite({ imageSrc: srcTileBlank, x, y, priority: 1 })

		for (let i = 0; i < 4; i++)
			this.memos.push(new Sprite({ imageSrc: [ srcMemo0, srcMemo1, srcMemo2, srcMemo3 ][i], x: x + 1 + i % 2 * 15, y: y + 1 + Math.floor(i / 2) * 15, visible: false, priority: 2 }))
	}
}

let level = 1

const levels = [
	[
		[ 3, 1, 6, 24 ],
		[ 0, 3, 6, 27 ],
		[ 5, 0, 6, 32 ],
		[ 2, 2, 6, 36 ],
		[ 4, 1, 6, 48 ]
	],
	[
		[ 1, 3, 7, 54 ],
		[ 6, 0, 7, 64 ],
		[ 3, 2, 7, 72 ],
		[ 0, 4, 7, 81 ],
		[ 5, 1, 7, 96 ]
	],
	[
		[ 2, 3, 8, 108 ],
		[ 7, 0, 8, 128 ],
		[ 4, 2, 8, 144 ],
		[ 1, 4, 8, 162 ],
		[ 6, 1, 8, 192 ]
	],
	[
		[ 3, 3, 8, 216 ],
		[ 0, 5, 8, 243 ],
		[ 8, 0, 10, 256 ],
		[ 5, 2, 10, 288 ],
		[ 2, 4, 10, 324 ]
	],
	[
		[ 7, 1, 10, 384 ],
		[ 4, 3, 10, 432 ],
		[ 1, 5, 10, 486 ],
		[ 9, 0, 10, 512 ],
		[ 6, 2, 10, 576 ]
	],
	[
		[ 3, 4, 10, 648 ],
		[ 0, 6, 10, 729 ],
		[ 8, 1, 10, 768 ],
		[ 5, 3, 10, 864 ],
		[ 2, 5, 10, 972 ]
	],
	[
		[ 7, 2, 10, 1152 ],
		[ 4, 4, 10, 1296 ],
		[ 1, 6, 13, 1458 ],
		[ 9, 1, 13, 1536 ],
		[ 6, 3, 10, 1728 ]
	],
	[
		[ 0, 7, 10, 2187 ],
		[ 8, 2, 10, 2304 ],
		[ 5, 4, 10, 2592 ],
		[ 2, 6, 10, 2916 ],
		[ 7, 3, 10, 3456 ]
	]
]

new Sprite({ imageSrc: srcBackground })

const tileHover = new Sprite({ visible: false, priority: 3, imageSrc: srcTileHover })
const tiles: Tile[] = []
const animations: Generator[] = []

for (let i = 0; i < 25; i++)
	tiles.push(new Tile(1, 12 + i % 5 * 32, 202 + Math.floor(i / 5) * 32))

let maxCoins = 0

let memoTileSelected = tiles[0]

const memoPress = new Sprite({ visible: false, priority: 3, imageSrc: srcMemoPress, x: 9, y: 199 })

const boldDigitSrcs = [
	srcNumberBold0,
	srcNumberBold1,
	srcNumberBold2,
	srcNumberBold3,
	srcNumberBold4,
	srcNumberBold5,
	srcNumberBold6,
	srcNumberBold7,
	srcNumberBold8,
	srcNumberBold9
]

const bigDigitSrcs = [
	srcNumberBig0,
	srcNumberBig1,
	srcNumberBig2,
	srcNumberBig3,
	srcNumberBig4,
	srcNumberBig5,
	srcNumberBig6,
	srcNumberBig7,
	srcNumberBig8,
	srcNumberBig9
]

const rightInfo: Sprite[][] = []

for (let i = 0; i < 5; i++) {
	rightInfo.push([
		new Sprite({ x: 181, y: 201 + 32 * i, priority: 1, imageSrc: srcNumberBold0 }),
		new Sprite({ x: 188, y: 201 + 32 * i, priority: 1, imageSrc: srcNumberBold0 }),
		new Sprite({ x: 188, y: 214 + 32 * i, priority: 1, imageSrc: srcNumberBold0 })
	])
}

const bottomInfo: Sprite[][] = []

for (let i = 0; i < 5; i++) {
	bottomInfo.push([
		new Sprite({ x: 21 + 32 * i, y: 361, priority: 1, imageSrc: srcNumberBold0 }),
		new Sprite({ x: 28 + 32 * i, y: 361, priority: 1, imageSrc: srcNumberBold0 }),
		new Sprite({ x: 28 + 32 * i, y: 374, priority: 1, imageSrc: srcNumberBold0 })
	])
}

let currentCoins = 0
let active = false
let lose = false

const currentScoreboard: Sprite[] = []

const cookie: LooseObject = {}

for (const keyValue of document.cookie.split("; ")) {
	const [ key, value ] = keyValue.split("=")

	cookie[key] = value
}

for (let i = 0; i < 5; i++)
	currentScoreboard.push(new Sprite({ x: 236 - 16 * i, y: 157, priority: 1, imageSrc: srcNumberBig0 }))

let totalCoins = Number(cookie.totalCoins) || 0

const totalScoreboard: Sprite[] = []

for (let i = 0; i < 5; i++)
	totalScoreboard.push(new Sprite({ x: 236 - 16 * i, y: 116, priority: 1, imageSrc: bigDigitSrcs[Math.floor(totalCoins / (10 ** i)) % 10] }))

const memoButton = new Sprite({ x: 199, y: 202, priority: 3, imageSrc: srcButtonMemoOpen })

let memoOpen = false

const memoFrame = new Sprite({ x: 199, y: 203, priority: 1, imageSrc: srcMemoFrame, visible: false })

const memoButtons: Sprite[] = []

for (let i = 0; i < 4; i++)
	memoButtons.push(new Sprite({
		x: 202 + i % 2 * 24,
		y: 273 + Math.floor(i / 2) * 24,
		priority: 2,
		imageSrc: [ srcButtonMemo0Off, srcButtonMemo1Off, srcButtonMemo2Off, srcButtonMemo3Off ][i], visible: false
	}))

const music = new Audio(srcMusic)
music.loop = true
music.autoplay = true
music.play()

const levelNumber = new Sprite({ x: 174, y: 10, imageSrc: srcNumberThin1 })

setup()
updateSize()
drawLoop()

function setup() {
	currentCoins = 0

	const tileValues = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
	const toSet = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
	const levelStats = levels[Math.round(level - 1)][Math.floor(Math.random() * 5)]

	maxCoins = levelStats[3]

	for (let i = 0; i < 3; i++)
		for (let j = 0; j < levelStats[i]; j++)
			tileValues[toSet.splice(Math.floor(Math.random() * toSet.length), 1)[0]] = (i + 2) % 4

	for (let i = 0; i < 25; i++) {
		const tile = tiles[i]

		tile.value = tileValues[i]
		tile.flipped = false
		tile.sprite.imageSrc = srcTileBlank
		
		// for (const memo of tile.memos)
		// 	memo.visible = false
	}
	
	for (let i = 0; i < 5; i++) {
		let coins = 0
		let voltorbs = 0
	
		for (let j = 0; j < 5; j++) {
			const value = tiles[i * 5 + j].value
			value ? coins += value : voltorbs++
		}
	
		rightInfo[i][0].imageSrc = boldDigitSrcs[Math.floor(coins / 10)]
		rightInfo[i][1].imageSrc = boldDigitSrcs[coins % 10]
		rightInfo[i][2].imageSrc = boldDigitSrcs[voltorbs]
	}

	for (let i = 0; i < 5; i++) {
		let coins = 0
		let voltorbs = 0
	
		for (let j = 0; j < 5; j++) {
			const value = tiles[j * 5 + i].value
			value ? coins += value : voltorbs++
		}

		bottomInfo[i][0].imageSrc = boldDigitSrcs[Math.floor(coins / 10)]
		bottomInfo[i][1].imageSrc = boldDigitSrcs[coins % 10]
		bottomInfo[i][2].imageSrc = boldDigitSrcs[voltorbs]
	}

	for (const sprite of currentScoreboard)
		sprite.imageSrc = srcNumberBig0
	
	active = true
}

function drawLoop() {
	if (context) {
		context.clearRect(0, 0, canvas.width, canvas.height)

		Sprite.drawAll()

		const animationsDone: number[] = []

		for (let i = 0; i < animations.length; i++)
			animations[i].next().done &&
				animationsDone.push(i)

		for (const animationDone of animationsDone.reverse())
			animations.splice(animationDone, 1)
	}


	requestAnimationFrame(drawLoop)
}

function updateSize() {
	scale = Math.min(window.innerHeight / canvas.height, window.innerWidth / canvas.width)

	if (scale > 1) {
		scale = Math.floor(scale)

		canvas.className = "nearestNeigbour"
	} else
		canvas.className = ""

	canvas.style.height = `${canvas.height * scale}px`
	canvas.style.width = `${canvas.width * scale}px`
}

canvas.onmousemove = ({ clientX, clientY }) => {
	if (active) {
		const x = (clientX - canvas.offsetLeft) / scale
		const y = (clientY - canvas.offsetTop) / scale

		tileHover.visible = false

		for (const tile of tiles) {
			if (tile.sprite.overlapsPoint(x, y) && (!tile.flipped || memoOpen)) {
				tileHover.imageSrc = [ srcTileHover, srcMemoHover ][Number(memoOpen)]
				tileHover.x = tile.sprite.x - 3
				tileHover.y = tile.sprite.y - 3
				tileHover.visible = true

				break
			}
		}

		if (memoOpen && !memoTileSelected.flipped)
			for (const button of memoButtons) {
				if (button.overlapsPoint(x, y)) {
					tileHover.imageSrc = srcButtonMemoHover
					tileHover.x = button.x - 2
					tileHover.y = button.y - 2
					tileHover.visible = true

					break
				}
			}
	}
}

canvas.onmouseup = ({ clientX, clientY }) => {
	tileHover.visible = false

	if (active) {
		const x = (clientX - canvas.offsetLeft) / scale
		const y = (clientY - canvas.offsetTop) / scale

		// if (memoOpen)
		// 	for (const memoButton of memoButtons) {
		// 		if (memoButton.overlapsPoint(x, y)) {


		// 			break
		// 		}
		// 	}

		if (memoOpen) {
			for (const tile of tiles) {
				if (tile.sprite.overlapsPoint(x, y)) {
					memoTileSelected = tile
					memoPress.x = tile.sprite.x - 3
					memoPress.y = tile.sprite.y - 3

					for (let i = 0; i < 4; i++) {
						const memoButton = memoButtons[i]
						const memo = memoTileSelected.memos[i]
			
						memoButton.imageSrc = [ [ srcButtonMemo0Off, srcButtonMemo1Off, srcButtonMemo2Off, srcButtonMemo3Off ], [ srcButtonMemo0On, srcButtonMemo1On, srcButtonMemo2On, srcButtonMemo3On ] ][Number(memo.visible)][i]
					}

					break
				}
			}

			if (!memoTileSelected.flipped)
				for (let i = 0; i < 4; i++) {
					const memoButton = memoButtons[i]

					if (memoButton.overlapsPoint(x, y)) {
						const memo = memoTileSelected.memos[i]
						memo.visible = !memo.visible

						memoButton.imageSrc = [ [ srcButtonMemo0Off, srcButtonMemo1Off, srcButtonMemo2Off, srcButtonMemo3Off ], [ srcButtonMemo0On, srcButtonMemo1On, srcButtonMemo2On, srcButtonMemo3On ] ][Number(memo.visible)][i]

						break
					}
				}
		} else
			for (const tile of tiles) {
				if (!tile.flipped && tile.sprite.overlapsPoint(x, y)) {
					const oldCurrentCoins = currentCoins

					for (const memo of tile.memos)
						memo.visible = false
					
					if (memoTileSelected == tile)
						for (let i = 0; i < 4; i++)
							memoButtons[i].imageSrc = [ srcButtonMemo0Off, srcButtonMemo1Off, srcButtonMemo2Off, srcButtonMemo3Off ][i]

					if (currentCoins)
						currentCoins *= tile.value
					else
						currentCoins = tile.value

					tile.flipped = true

					if (currentCoins == maxCoins) {
						active = false

						level < 8 &&
							level++

						const oldTotal = totalCoins

						document.cookie = `totalCoins=${totalCoins += currentCoins}; max-age=31536000`
						
						animations.push(playAnimations(tileFlip(tile), transitionsScoreboard(currentScoreboard, oldCurrentCoins, currentCoins), function* () {
							yield* skipFrames(12)

							animations.push(
								transitionsScoreboard(totalScoreboard, oldTotal, totalCoins),
								playAnimations(transitionsScoreboard(currentScoreboard, currentCoins, 0), finish())
							)
						}()))
					} else {
						if (currentCoins)
							animations.push(playAnimations(tileFlip(tile), transitionsScoreboard(currentScoreboard, oldCurrentCoins, currentCoins)))
						else {
							if (level > 1)
								level -= 0.5

							active = false
							animations.push(playAnimations(
								tileFlip(tile),
								blowup(tile),
								transitionsScoreboard(currentScoreboard, oldCurrentCoins, currentCoins),
								finish()
							))
						}
					}

					break
				}
			}
	}
}

canvas.onmousedown = ({ clientX, clientY }) => {
	// tileHover.visible = false

	if (active) {
		music.play()
		const x = (clientX - canvas.offsetLeft) / scale
		const y = (clientY - canvas.offsetTop) / scale

		if (memoButton.overlapsPoint(x, y)) {
			memoPress.visible = memoOpen = !memoOpen

			animations.push(memoButtonPress())
		}
	}
}

canvas.onmouseleave = canvas.onmousemove

function* tileFlip(tile: Tile) {
	tile.sprite.imageSrc = srcTileFlip0
	tile.sprite.x += 3

	yield* skipFrames(6)
	tile.sprite.imageSrc = srcTileFlip1
	tile.sprite.x +=  6

	yield* skipFrames(6)
	tile.sprite.imageSrc = [ srcTile0Flip, srcTile1Flip, srcTile2Flip, srcTile3Flip ][tile.value]
	tile.sprite.x -=  4

	yield* skipFrames(6)
	tile.sprite.imageSrc = [ srcTile0, srcTile1, srcTile2, srcTile3 ][tile.value]
	tile.sprite.x -= 5
}

function* skipFrames(frames: number) {
	for (let i = 0; i < frames - 1; i++)
		yield
}

function* transitionsScoreboard(scoreboard: Sprite[], from: number, to: number) {
	while (from != to) {
		from > to ? from-- : from++

		for (let i = 0; i < 5; i++)
			scoreboard[i].imageSrc = bigDigitSrcs[Math.floor(from / (10 ** i)) % 10]

		yield
	}
}

function* darkenScreen() {
	if (context) {
		let i = 0

		while (1) {
			context.fillStyle = "#000000" + (i < 129 ? i += 2 : i).toString(16)
			context.beginPath()
			context.fillRect(0, 190, canvas.width, 207)
			yield
		}
	}
}

function* playAnimations(...animations: Generator[]) {
	for (const animation of animations) {
		yield* animation
	}
}

function* memoButtonPress() {
	memoButton.imageSrc = [ srcButtonMemoOpenPress, srcButtonMemoClosePress ][Number(memoOpen)]
	yield* skipFrames(6)
	
	memoButton.imageSrc = [ srcButtonMemoOpen, srcButtonMemoClose ][Number(memoOpen)]

	if (memoOpen) {
		memoFrame.visible = true

		yield* skipFrames(2)
		memoFrame.y += 17
		yield* skipFrames(2)
		memoFrame.y += 17
		yield* skipFrames(2)
		memoFrame.y += 17
		yield* skipFrames(2)
		memoFrame.y += 16

		for (let i = 0; i < 4; i++)
			memoButtons[i].visible = true
	} else {
		for (let i = 0; i < 4; i++)
			memoButtons[i].visible = false

		memoFrame.y -= 16
		yield* skipFrames(2)
		memoFrame.y -= 17
		yield* skipFrames(2)
		memoFrame.y -= 17
		yield* skipFrames(2)
		memoFrame.y -= 17
		yield* skipFrames(2)
		
		memoFrame.visible = false
	}
}

function* blowup(tile: Tile) {
	tile.sprite.priority = 3

	yield* skipFrames(6)
	tile.sprite.imageSrc = srcExplode0

	yield* skipFrames(6)
	tile.sprite.imageSrc = srcExplode1

	yield* skipFrames(6)
	tile.sprite.imageSrc = srcExplode2

	yield* skipFrames(6)
	tile.sprite.imageSrc = srcExplode3
	tile.sprite.x -= 6
	tile.sprite.y -= 6

	yield* skipFrames(6)
	tile.sprite.imageSrc = srcExplode4
	tile.sprite.x -= 4
	tile.sprite.y -= 4

	yield* skipFrames(6)
	tile.sprite.imageSrc = srcExplode5
	tile.sprite.x -= 7
	tile.sprite.y -= 7

	yield* skipFrames(6)
	tile.sprite.imageSrc = srcExplode6
	tile.sprite.x -= 2
	tile.sprite.y -= 2

	yield* skipFrames(6)
	tile.sprite.imageSrc = srcExplode7
	tile.sprite.x -= 1
	tile.sprite.y -= 1

	yield* skipFrames(6)
	tile.sprite.imageSrc = srcExplode8
	tile.sprite.x -= 1
	tile.sprite.y -= 1

	yield* skipFrames(6)
	tile.sprite.imageSrc = srcTile0
	tile.sprite.x += 21
	tile.sprite.y += 21

	tile.sprite.priority = 1
}

function* finish() {
	for (let i = 0; i < 25; i++) {
		const tile = tiles[i]

		for (const memo of tile.memos)
			memo.visible = false

		if (!tile.flipped)
			animations.push(tileFlip(tile))

		animations.push(function* () {
			yield* skipFrames(60 + i % 5 * 12)

			tile.sprite.imageSrc = [ srcTile0Flip, srcTile1Flip, srcTile2Flip, srcTile3Flip ][tile.value]
			tile.sprite.x += 5

			yield* skipFrames(6)

			tile.sprite.imageSrc = srcTileFlip1
			tile.sprite.x +=  4

			yield* skipFrames(6)

			tile.sprite.imageSrc = srcTileFlip0
			tile.sprite.x -= 6

			yield* skipFrames(6)

			tile.sprite.imageSrc = srcTileBlank
			tile.sprite.x -= 3

			if (i == 24) {
				levelNumber.imageSrc = [ srcNumberThin1, srcNumberThin2, srcNumberThin3, srcNumberThin4, srcNumberThin5, srcNumberThin6, srcNumberThin7, srcNumberThin8 ][Math.round(level - 1)]
				setup()
			}
		}())
	}
}
