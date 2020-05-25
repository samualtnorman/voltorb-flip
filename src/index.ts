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
import srcDigitBold0 from "./assets/number/bold_0.png"
import srcDigitBold1 from "./assets/number/bold_1.png"
import srcDigitBold2 from "./assets/number/bold_2.png"
import srcDigitBold3 from "./assets/number/bold_3.png"
import srcDigitBold4 from "./assets/number/bold_4.png"
import srcDigitBold5 from "./assets/number/bold_5.png"
import srcDigitBold6 from "./assets/number/bold_6.png"
import srcDigitBold7 from "./assets/number/bold_7.png"
import srcDigitBold8 from "./assets/number/bold_8.png"
import srcDigitBold9 from "./assets/number/bold_9.png"
import srcDigitBig0 from "./assets/number/big_0.png"
import srcDigitBig1 from "./assets/number/big_1.png"
import srcDigitBig2 from "./assets/number/big_2.png"
import srcDigitBig3 from "./assets/number/big_3.png"
import srcDigitBig4 from "./assets/number/big_4.png"
import srcDigitBig5 from "./assets/number/big_5.png"
import srcDigitBig6 from "./assets/number/big_6.png"
import srcDigitBig7 from "./assets/number/big_7.png"
import srcDigitBig8 from "./assets/number/big_8.png"
import srcDigitBig9 from "./assets/number/big_9.png"
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
import srcDigitThin1 from "./assets/number/thin_1.png"
import srcDigitThin2 from "./assets/number/thin_2.png"
import srcDigitThin3 from "./assets/number/thin_3.png"
import srcDigitThin4 from "./assets/number/thin_4.png"
import srcDigitThin5 from "./assets/number/thin_5.png"
import srcDigitThin6 from "./assets/number/thin_6.png"
import srcDigitThin7 from "./assets/number/thin_7.png"
import srcDigitThin8 from "./assets/number/thin_8.png"
import srcTileMemo0 from "./assets/tile/memo_0.png"
import srcTileMemo1 from "./assets/tile/memo_1.png"
import srcTileMemo2 from "./assets/tile/memo_2.png"
import srcTileMemo3 from "./assets/tile/memo_3.png"
import srcSuccess0 from "./assets/success_0.png"
import srcSuccess1 from "./assets/success_1.png"
import srcSuccess2 from "./assets/success_2.png"
import srcSuccess3 from "./assets/success_3.png"

interface LooseObject<T = any> {
	[key: string]: T | undefined
}

class Sprite {
	x: number
	y: number
	layer: number
	hidden: boolean
	src: string

	constructor({ x = 0, y = 0, layer = 0, hidden = false, src = "" }: Partial<Sprite> = {}) {
		this.x = x
		this.y = y
		this.layer = layer
		this.hidden = hidden
		this.src = src

		Sprite.sprites.push(this)
	}

	draw() {
		const image = this.getImage()

		!this.hidden && context && image &&
			context.drawImage(image, this.x, this.y)
	}

	overlapsPoint(x: number, y: number) {
		const image = this.getImage()

		return image && x > this.x && x < this.x + image.width && y > this.y && y < this.y + image.height
	}

	static sprites: Sprite[] = []

	static drawAll() {
		Sprite.sprites.sort((a, b) => a.layer - b.layer)

		for (const sprite of Sprite.sprites)
			sprite.draw()
	}

	static images: LooseObject<HTMLImageElement> = {}

	static getImage(src: string) {
		const image = Sprite.images[src] || Sprite.images[srcMissing]

		if (image)
			return image

		throw new Error("missing texture texture was missing")
	}

	getImage() {
		return Sprite.getImage(this.src)
	}

	static loadImage(...srcs: string[]) {
		for (let src of srcs) {
			let image = new Image
			image.src = src
			Sprite.images[src] = image
		}
	}
}

class Tile {
	sprite: Sprite
	value: number
	flipped = false
	memos: Sprite[] = []

	constructor(value: Tile["value"], x: number, y: number) {
		this.value = value
		this.sprite = new Sprite({ src: srcTileBlank, x, y, layer: 1 })

		for (let i = 0; i < 4; i++)
			this.memos.push(new Sprite({
				src: [ srcMemo0, srcMemo1, srcMemo2, srcMemo3 ][i],
				x: x + 1 + i % 2 * 15,
				y: y + 1 + Math.floor(i / 2) * 15,
				hidden: true,
				layer: 2
			}))
	}
}

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
] as const

const tileHover = new Sprite({ hidden: true, layer: 3, src: srcTileHover })
const tiles: Tile[] = []
const postProcessing: Generator[] = []
const rightInfo: Sprite[][] = []
const bottomInfo: Sprite[][] = []
const currentScoreboard: Sprite[] = []
const cookie: LooseObject = {}
const totalScoreboard: Sprite[] = []
const memoButtons: Sprite[] = []
const music = new Audio(srcMusic)
const levelNumber = new Sprite({ x: 173, y: 11, src: srcDigitThin1, layer: 1 })

const boldDigitSrcs = [
	srcDigitBold0,
	srcDigitBold1,
	srcDigitBold2,
	srcDigitBold3,
	srcDigitBold4,
	srcDigitBold5,
	srcDigitBold6,
	srcDigitBold7,
	srcDigitBold8,
	srcDigitBold9
] as const

const bigDigitSrcs = [
	srcDigitBig0,
	srcDigitBig1,
	srcDigitBig2,
	srcDigitBig3,
	srcDigitBig4,
	srcDigitBig5,
	srcDigitBig6,
	srcDigitBig7,
	srcDigitBig8,
	srcDigitBig9
] as const

const tileFlipSrcs = [
	srcTile0Flip,
	srcTile1Flip,
	srcTile2Flip,
	srcTile3Flip
] as const

const memoButton = new Sprite({
	x: 200,
	y: 204,
	layer: 3,
	src: srcButtonMemoOpen
})

const memoFrame = new Sprite({
	x: memoButton.x,
	y: memoButton.y + 1,
	layer: 1,
	src: srcMemoFrame,
	hidden: true
})

const thinDigitSrcs = [
	"",
	srcDigitThin1,
	srcDigitThin2,
	srcDigitThin3,
	srcDigitThin4,
	srcDigitThin5,
	srcDigitThin6,
	srcDigitThin7,
	srcDigitThin8,
	""
] as const

const memoButtonsOffSrcs = [
	srcButtonMemo0Off,
	srcButtonMemo1Off,
	srcButtonMemo2Off,
	srcButtonMemo3Off
] as const

const memoButtonSrcs = [
	[
		srcButtonMemo0On,
		srcButtonMemo1On,
		srcButtonMemo2On,
		srcButtonMemo3On
	],
	memoButtonsOffSrcs
] as const

const canvas = document.getElementsByTagName("body")[0].appendChild(document.createElement("canvas"))
const context = canvas.getContext("2d")

Sprite.loadImage(
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
	srcDigitBold0,
	srcDigitBold1,
	srcDigitBold2,
	srcDigitBold3,
	srcDigitBold4,
	srcDigitBold5,
	srcDigitBold6,
	srcDigitBold7,
	srcDigitBold8,
	srcDigitBold9,
	srcDigitBig0,
	srcDigitBig1,
	srcDigitBig2,
	srcDigitBig3,
	srcDigitBig4,
	srcDigitBig5,
	srcDigitBig6,
	srcDigitBig7,
	srcDigitBig8,
	srcDigitBig9,
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
	srcDigitThin1,
	srcDigitThin2,
	srcDigitThin3,
	srcDigitThin4,
	srcDigitThin5,
	srcDigitThin6,
	srcDigitThin7,
	srcDigitThin8,
	srcTileMemo0,
	srcTileMemo1,
	srcTileMemo2,
	srcTileMemo3,
	srcSuccess0,
	srcSuccess1,
	srcSuccess2,
	srcSuccess3
)

{
	const backgroundImage = (new Sprite({ src: srcBackground })).getImage()

	backgroundImage.onload = () => {
		canvas.width = backgroundImage.width
		canvas.height = backgroundImage.height
		updateSize()
	}
}

let scale = 1
let level = 1
let maxCoins = 0
let currentCoins = 0
let active = false
let totalCoins = Number(cookie.totalCoins) || 0
let memoOpen = false

onresize = () => {
	updateSize()
}

for (let i = 0; i < 25; i++)
	tiles.push(new Tile(1, 12 + i % 5 * 32, 204 + Math.floor(i / 5) * 32))

const memoPress = new Sprite({
	hidden: true,
	layer: 3,
	src: srcMemoPress,
	x: tiles[0].sprite.x - 3,
	y: tiles[0].sprite.y - 3
})

for (let i = 0; i < 5; i++) {
	rightInfo.push([
		new Sprite({ x: 180, y: 203 + 32 * i, layer: 1, src: srcDigitBold0 }),
		new Sprite({ x: 188, y: 203 + 32 * i, layer: 1, src: srcDigitBold0 }),
		new Sprite({ x: 188, y: 216 + 32 * i, layer: 1, src: srcDigitBold0 })
	])

	bottomInfo.push([
		new Sprite({ x: 20 + 32 * i, y: 363, layer: 1, src: srcDigitBold0 }),
		new Sprite({ x: 28 + 32 * i, y: 363, layer: 1, src: srcDigitBold0 }),
		new Sprite({ x: 28 + 32 * i, y: 376, layer: 1, src: srcDigitBold0 })
	])

	currentScoreboard.push(new Sprite({ x: 236 - 16 * i, y: 157, layer: 1, src: srcDigitBig0 }))

	totalScoreboard.push(new Sprite({
		x: 236 - 16 * i,
		y: 117, layer: 1,
		src: bigDigitSrcs[Math.floor(totalCoins / (10 ** i)) % 10]
	}))
}

let memoTileSelected = tiles[0]

for (const keyValue of document.cookie.split("; ")) {
	const [ key, value ] = keyValue.split("=")

	cookie[key] = value
}

for (let i = 0; i < 4; i++)
	memoButtons.push(new Sprite({
		x: memoButton.x + 3 + i % 2 * 24,
		y: memoButton.y + 71 + Math.floor(i / 2) * 24,
		layer: 2,
		hidden: true
	}))

music.loop = true
music.autoplay = true
music.play()

canvas.onmousemove = ({ clientX, clientY }) => {
	const x = (clientX - canvas.offsetLeft) / scale
	const y = (clientY - canvas.offsetTop) / scale

	if (active) {
		tileHover.hidden = true

		for (const tile of tiles) {
			if (tile.sprite.overlapsPoint(x, y) && (!tile.flipped || memoOpen)) {
				tileHover.src = [ srcTileHover, srcMemoHover ][Number(memoOpen)]
				tileHover.x = tile.sprite.x - 3
				tileHover.y = tile.sprite.y - 3
				tileHover.hidden = false

				break
			}
		}

		if (memoOpen && !memoTileSelected.flipped)
			for (const button of memoButtons) {
				if (button.overlapsPoint(x, y)) {
					tileHover.src = srcButtonMemoHover
					tileHover.x = button.x - 2
					tileHover.y = button.y - 2
					tileHover.hidden = false

					break
				}
			}
	}
}

canvas.onmouseup = ({ clientX, clientY }) => {
	const x = (clientX - canvas.offsetLeft) / scale
	const y = (clientY - canvas.offsetTop) / scale

	if (active) {
		if (memoOpen) {
			for (const tile of tiles)
				if (tile.sprite.overlapsPoint(x, y)) {
					memoTileSelected = tile
					memoPress.x = tile.sprite.x - 3
					memoPress.y = tile.sprite.y - 3

					for (let i = 0; i < 4; i++)
						memoButtons[i].src = memoButtonSrcs[Number(memoTileSelected.memos[i].hidden)][i]

					break
				}

			if (!memoTileSelected.flipped) {
				const memos = memoTileSelected.memos

				for (let i = 0; i < 4; i++) {
					const memoButton = memoButtons[i]

					if (memoButton.overlapsPoint(x, y)) {
						const memo = memos[i]
						const memosOn: number[] = []

						memo.hidden = !memo.hidden

						for (let i = 0; i < memos.length; i++)
							memos[i].hidden || memosOn.push(i)

						memoButton.src = memoButtonSrcs[Number(memo.hidden)][i]

						if (memosOn.length == 1) {
							memoTileSelected.sprite.src = [ srcTileMemo0, srcTileMemo1, srcTileMemo2, srcTileMemo3 ][memosOn[0]]
							memoTileSelected.sprite.layer = 4
						} else {
							memoTileSelected.sprite.src = srcTileBlank
							memoTileSelected.sprite.layer = 1
						}

						break
					}
				}
			}
		} else
			for (const tile of tiles) {
				if (!tile.flipped && tile.sprite.overlapsPoint(x, y)) {
					const oldCurrentCoins = currentCoins

					tileHover.hidden = true

					for (const memo of tile.memos)
						memo.hidden = true

					if (memoTileSelected == tile)
						for (let i = 0; i < 4; i++)
							memoButtons[i].src = memoButtonsOffSrcs[i]

					if (currentCoins)
						currentCoins *= tile.value
					else
						currentCoins = tile.value

					tile.flipped = true

					if (currentCoins == maxCoins) {
						const oldTotal = totalCoins

						active = false
						level < 8 && level++

						document.cookie = `totalCoins=${totalCoins += currentCoins}; max-age=31536000`

						postProcessing.push(playAnimations(tileFlip(tile), transitionsScoreboard(currentScoreboard, oldCurrentCoins, currentCoins), function* () {
							yield* skipFrames(12)

							postProcessing.push(
								transitionsScoreboard(totalScoreboard, oldTotal, totalCoins),
								playAnimations(transitionsScoreboard(currentScoreboard, currentCoins, 0), finish())
							)
						}()))
					} else {
						if (currentCoins)
							postProcessing.push(playAnimations(
								tileFlip(tile),
								function* () {
									postProcessing.push(
										success(tile),
										transitionsScoreboard(currentScoreboard, oldCurrentCoins, currentCoins)
									)
								}()
							))
						else {
							if (level > 1)
								level -= 0.5

							active = false

							postProcessing.push(playAnimations(
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
	const x = (clientX - canvas.offsetLeft) / scale
	const y = (clientY - canvas.offsetTop) / scale

	music.play()

	if (active && memoButton.overlapsPoint(x, y)) {
		memoPress.hidden = !(memoOpen = !memoOpen)
		postProcessing.push(memoButtonPress())
	}
}

canvas.onmouseleave = canvas.onmousemove

setup()
updateSize()
drawLoop()

function setup() {
	const tileValues = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
	const toSet = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
	const levelStats = levels[Math.round(level - 1)][Math.floor(Math.random() * 5)]

	for (let i = 0; i < 4; i++)
		memoButtons[i].src = memoButtonsOffSrcs[i]

	currentCoins = 0
	maxCoins = levelStats[3]

	for (let i = 0; i < 3; i++)
		for (let j = 0; j < levelStats[i]; j++)
			tileValues[toSet.splice(Math.floor(Math.random() * toSet.length), 1)[0]] = (i + 2) % 4

	for (let i = 0; i < 25; i++) {
		const tile = tiles[i]

		tile.value = tileValues[i]
		tile.flipped = false
		tile.sprite.src = srcTileBlank
	}

	for (let i = 0; i < 5; i++) {
		let coins = 0
		let voltorbs = 0

		for (let j = 0; j < 5; j++) {
			const value = tiles[i * 5 + j].value
			value ? coins += value : voltorbs++
		}

		rightInfo[i][0].src = boldDigitSrcs[Math.floor(coins / 10)]
		rightInfo[i][1].src = boldDigitSrcs[coins % 10]
		rightInfo[i][2].src = boldDigitSrcs[voltorbs]
	}

	for (let i = 0; i < 5; i++) {
		let coins = 0
		let voltorbs = 0

		for (let j = 0; j < 5; j++) {
			const value = tiles[j * 5 + i].value
			value ? coins += value : voltorbs++
		}

		bottomInfo[i][0].src = boldDigitSrcs[Math.floor(coins / 10)]
		bottomInfo[i][1].src = boldDigitSrcs[coins % 10]
		bottomInfo[i][2].src = boldDigitSrcs[voltorbs]
	}

	for (const sprite of currentScoreboard)
		sprite.src = srcDigitBig0

	active = true
}

function drawLoop() {
	if (context) {
		const postprocFinished: number[] = []

		context.clearRect(0, 0, canvas.width, canvas.height)
		Sprite.drawAll()

		for (let i = 0; i < postProcessing.length; i++)
			postProcessing[i].next().done &&
				postprocFinished.push(i)

		for (const animationDone of postprocFinished.reverse())
			postProcessing.splice(animationDone, 1)
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

function* tileFlip(tile: Tile) {
	tile.sprite.src = srcTileFlip0
	tile.sprite.x += 3

	yield* skipFrames(6)
	tile.sprite.src = srcTileFlip1
	tile.sprite.x +=  6

	yield* skipFrames(6)
	tile.sprite.src = tileFlipSrcs[tile.value]
	tile.sprite.x -=  4

	yield* skipFrames(6)
	tile.sprite.src = [ srcTile0, srcTile1, srcTile2, srcTile3 ][tile.value]
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
			scoreboard[i].src = bigDigitSrcs[Math.floor(from / (10 ** i)) % 10]

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
	memoButton.src = [ srcButtonMemoOpenPress, srcButtonMemoClosePress ][Number(memoOpen)]

	yield* skipFrames(6)

	memoButton.src = [ srcButtonMemoOpen, srcButtonMemoClose ][Number(memoOpen)]

	if (memoOpen) {
		memoFrame.hidden = false

		yield* skipFrames(2)
		memoFrame.y += 17
		yield* skipFrames(2)
		memoFrame.y += 17
		yield* skipFrames(2)
		memoFrame.y += 17
		yield* skipFrames(2)
		memoFrame.y += 16

		for (let i = 0; i < 4; i++)
			memoButtons[i].hidden = false
	} else {
		for (let i = 0; i < 4; i++)
			memoButtons[i].hidden = true

		memoFrame.y -= 16
		yield* skipFrames(2)
		memoFrame.y -= 17
		yield* skipFrames(2)
		memoFrame.y -= 17
		yield* skipFrames(2)
		memoFrame.y -= 17
		yield* skipFrames(2)

		memoFrame.hidden = true
	}
}

function* blowup(tile: Tile) {
	tile.sprite.layer = 5

	yield* skipFrames(6)
	tile.sprite.src = srcExplode0

	yield* skipFrames(6)
	tile.sprite.src = srcExplode1

	yield* skipFrames(6)
	tile.sprite.src = srcExplode2

	yield* skipFrames(6)
	tile.sprite.src = srcExplode3
	tile.sprite.x -= 6
	tile.sprite.y -= 6

	yield* skipFrames(6)
	tile.sprite.src = srcExplode4
	tile.sprite.x -= 4
	tile.sprite.y -= 4

	yield* skipFrames(6)
	tile.sprite.src = srcExplode5
	tile.sprite.x -= 7
	tile.sprite.y -= 7

	yield* skipFrames(6)
	tile.sprite.src = srcExplode6
	tile.sprite.x -= 2
	tile.sprite.y -= 2

	yield* skipFrames(6)
	tile.sprite.src = srcExplode7
	tile.sprite.x -= 1
	tile.sprite.y -= 1

	yield* skipFrames(6)
	tile.sprite.src = srcExplode8
	tile.sprite.x -= 1
	tile.sprite.y -= 1

	yield* skipFrames(6)
	tile.sprite.src = srcTile0
	tile.sprite.x += 21
	tile.sprite.y += 21

	tile.sprite.layer = 1
}

function* finish() {
	for (let i = 0; i < 25; i++) {
		const tile = tiles[i]

		tile.sprite.layer = 1

		for (const memo of tile.memos)
			memo.hidden = true

		if (!tile.flipped)
			postProcessing.push(tileFlip(tile))

		postProcessing.push(function* () {
			yield* skipFrames(60 + i % 5 * 12)

			tile.sprite.src = tileFlipSrcs[tile.value]
			tile.sprite.x += 5

			yield* skipFrames(6)

			tile.sprite.src = srcTileFlip1
			tile.sprite.x +=  4

			yield* skipFrames(6)

			tile.sprite.src = srcTileFlip0
			tile.sprite.x -= 6

			yield* skipFrames(6)

			tile.sprite.src = srcTileBlank
			tile.sprite.x -= 3

			if (i == 24) {
				levelNumber.src = thinDigitSrcs[Math.round(level)]
				setup()
			}
		}())
	}
}

function* success({ sprite: { x, y } }: Tile) {
	if (context) {
		let images = [
			Sprite.getImage(srcSuccess0),
			Sprite.getImage(srcSuccess1),
			Sprite.getImage(srcSuccess2),
			Sprite.getImage(srcSuccess3)
		]

		for (let i = 0; i < 4; i++)
			for (let j = 0; j < 6; j++) {
				context.drawImage(images[i], x - 13, y - 13)
				yield
			}
	}
}
