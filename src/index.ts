import { Sprite, canvas, txt_missing, autoResize, runScriptsParallel, runScriptsSequential, skipFrames } from "canvas-sprite-engine"

import "./assets/style.css"

import src_musicIntro from "./assets/music_intro.mp3"
import src_musicLoop from "./assets/music_loop.mp3"

import {
	txt_buttonMemo0Off,
	txt_buttonMemo0On,
	txt_buttonMemo1Off,
	txt_buttonMemo1On,
	txt_buttonMemo2Off,
	txt_buttonMemo2On,
	txt_buttonMemo3Off,
	txt_buttonMemo3On,
	txt_buttonMemoClose,
	txt_buttonMemoClosePress,
	txt_buttonMemoHover,
	txt_buttonMemoOpen,
	txt_buttonMemoOpenPress,
	txt_buttonMemoSOff,
	txt_buttonMemoSOn,
	txt_memo0,
	txt_memo1,
	txt_memo2,
	txt_memo3,
	txt_memoFrame,
	txt_memoHover,
	txt_memoPress,
	txt_digitBig0,
	txt_digitBig1,
	txt_digitBig2,
	txt_digitBig3,
	txt_digitBig4,
	txt_digitBig5,
	txt_digitBig6,
	txt_digitBig7,
	txt_digitBig8,
	txt_digitBig9,
	txt_digitBold0,
	txt_digitBold1,
	txt_digitBold2,
	txt_digitBold3,
	txt_digitBold4,
	txt_digitBold5,
	txt_digitBold6,
	txt_digitBold7,
	txt_digitBold8,
	txt_digitBold9,
	txt_digitThin1,
	txt_digitThin2,
	txt_digitThin3,
	txt_digitThin4,
	txt_digitThin5,
	txt_digitThin6,
	txt_digitThin7,
	txt_digitThin8,
	txt_tile1,
	txt_tile1Flip,
	txt_tile2,
	txt_tile2Flip,
	txt_tile3,
	txt_tile3Flip,
	txt_tileBlank,
	txt_tileExplode0,
	txt_tileExplode1,
	txt_tileExplode2,
	txt_tileExplode3,
	txt_tileExplode4,
	txt_tileExplode5,
	txt_tileExplode6,
	txt_tileExplode7,
	txt_tileExplode8,
	txt_tileFlip0,
	txt_tileFlip1,
	txt_tileHover,
	txt_tileMemo0,
	txt_tileMemo1,
	txt_tileMemo2,
	txt_tileMemo3,
	txt_tile0,
	txt_tile0Flip,
	txt_background,
	txt_success0,
	txt_success1,
	txt_success2,
	txt_success3
} from "./textures"

class Tile {
	sprite: Sprite
	value: number
	flipped = false
	memos: Sprite[] = []

	constructor(value: Tile["value"], x: number, y: number) {
		this.value = value
		this.sprite = new Sprite({
			texture: txt_tileBlank,
			x, y,
			layer: 1,
			onCursorEnter: () => {
				if (active && !this.flipped || memoOpen) {
					tileHover.texture = [ txt_tileHover, txt_memoHover ][Number(memoOpen)]
					tileHover.x = this.sprite.x - 3
					tileHover.y = this.sprite.y - 3
					tileHover.hidden = false
				}
			},
			onCursorLeave: () => {
				tileHover.hidden = true
			},
			onCursorUp: () => {
				if (active) {
					if (memoOpen) {
						if (!memoTileSelected.flipped && !this.flipped && copyMemoMode) {
							for (let i = 0; i < 4; i++)
								this.memos[i].hidden = memoTileSelected.memos[i].hidden
		
							this.sprite.texture = memoTileSelected.sprite.texture
							this.sprite.layer = memoTileSelected.sprite.layer
						}

						memoTileSelected = this
						memoPress.x = this.sprite.x - 3
						memoPress.y = this.sprite.y - 3
	
						for (let i = 0; i < 4; i++)
							memoButtons[i].texture = memoButtonSrcs[Number(!memoTileSelected.memos[i].hidden)][i]
					} else {
						if (!this.flipped) {
							const oldCurrentCoins = currentCoins
		
							tileHover.hidden = true
		
							for (const memo of this.memos)
								memo.hidden = true
		
							if (memoTileSelected == this)
								for (let i = 0; i < 4; i++)
									memoButtons[i].texture = memoButtonSrcs[0][i]
		
							if (currentCoins)
								currentCoins *= this.value
							else
								currentCoins = this.value
		
							this.flipped = true
		
							if (currentCoins == maxCoins) {
								const oldTotal = totalCoins
								totalCoins += currentCoins
								active = false
		
								if (flips + 1 > 7)
									flip8Streak++
								else
									flip8Streak = 0
		
								if (flip8Streak > 4)
									level = 8
								else
									level < 8 && level++
		
								this.sprite.scripts.push(runScriptsSequential(
									tileFlip(this),
									runScriptsParallel(
										success(this),
										runScriptsSequential(
											transitionsScoreboard(currentScoreboard, oldCurrentCoins, currentCoins),
											skipFrames(12),
											runScriptsParallel(
												transitionsScoreboard(totalScoreboard, oldTotal, totalCoins),
												transitionsScoreboard(currentScoreboard, currentCoins, 0),
												finish()
											)
										)
									)
								))
							} else {
								if (currentCoins) {
									flips++

									this.sprite.scripts.push(
										tileFlip(this),
										runScriptsParallel(
											success(this),
											transitionsScoreboard(currentScoreboard, oldCurrentCoins, currentCoins)
										)
									)
								} else {
									level = Math.max(Math.min(flips, level), 1)
									flip8Streak = 0
									active = false
		
									this.sprite.scripts.push(
										tileFlip(this),
										blowup(this),
										transitionsScoreboard(currentScoreboard, oldCurrentCoins, currentCoins),
										finish()
									)
								}
							}
						}
					}
				}
			}
		})

		for (let i = 0; i < 4; i++)
			this.memos.push(new Sprite({
				texture: [ txt_memo0, txt_memo1, txt_memo2, txt_memo3 ][i],
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

const tileHover = new Sprite({ hidden: true, layer: 3, texture: txt_tileHover })
const tiles: Tile[] = []
// const postProcessing: Generator[] = []
const rightInfo: Sprite[][] = []
const bottomInfo: Sprite[][] = []
const currentScoreboard: Sprite[] = []
const totalScoreboard: Sprite[] = []
const memoButtons: Sprite[] = []
let music = new Audio(src_musicIntro)
const musicLoop = new Audio(src_musicLoop)
const levelNumber = new Sprite({ x: 173, y: 11, texture: txt_digitThin1, layer: 1 })

const boldDigitSrcs = [
	txt_digitBold0,
	txt_digitBold1,
	txt_digitBold2,
	txt_digitBold3,
	txt_digitBold4,
	txt_digitBold5,
	txt_digitBold6,
	txt_digitBold7,
	txt_digitBold8,
	txt_digitBold9
] as const

const bigDigitSrcs = [
	txt_digitBig0,
	txt_digitBig1,
	txt_digitBig2,
	txt_digitBig3,
	txt_digitBig4,
	txt_digitBig5,
	txt_digitBig6,
	txt_digitBig7,
	txt_digitBig8,
	txt_digitBig9
] as const

const tileFlipSrcs = [
	txt_tile0Flip,
	txt_tile1Flip,
	txt_tile2Flip,
	txt_tile3Flip
] as const

const memoButton = new Sprite({
	x: 200,
	y: 204,
	layer: 3,
	texture: txt_buttonMemoOpen,
	onCursorDown: () => {
		if (active) {
			memoPress.hidden = !(memoOpen = !memoOpen)
			memoButton.scripts.push(memoButtonPress())
		}
	}
})

const sMemoButton = new Sprite({
	x: memoButton.x + 27,
	y: memoButton.y + 119,
	layer: 2,
	hidden: true,
	onCursorEnter: () => {
		if (memoOpen && !memoTileSelected.flipped) {
			tileHover.texture = txt_buttonMemoHover
			tileHover.x = sMemoButton.x - 2
			tileHover.y = sMemoButton.y - 2
			tileHover.hidden = false
		}
	},
	onCursorLeave: () => {
		tileHover.hidden = true
	}
})

const memoFrame = new Sprite({
	x: memoButton.x,
	y: memoButton.y + 1,
	layer: 1,
	texture: txt_memoFrame,
	hidden: true
})

const thinDigitSrcs = [
	null,
	txt_digitThin1,
	txt_digitThin2,
	txt_digitThin3,
	txt_digitThin4,
	txt_digitThin5,
	txt_digitThin6,
	txt_digitThin7,
	txt_digitThin8,
	null
] as const

const memoButtonSrcs = [
	[
		txt_buttonMemo0Off,
		txt_buttonMemo1Off,
		txt_buttonMemo2Off,
		txt_buttonMemo3Off
	],
	[
		txt_buttonMemo0On,
		txt_buttonMemo1On,
		txt_buttonMemo2On,
		txt_buttonMemo3On
	]
] as const

const body = document.getElementsByTagName("body")[0]
body.appendChild(canvas)
const text = body.appendChild(document.createElement("p"))
const volumeSlider = body.appendChild(document.createElement("input"))
const context = canvas.getContext("2d")

{
	const backgroundImage = (new Sprite({ texture: txt_background })).texture

	backgroundImage.onload = () => {
		canvas.width = backgroundImage.width
		canvas.height = backgroundImage.height
		autoResize()
	}
}

let level = 1
let maxCoins = 0
let currentCoins = 0
let active = false
let totalCoins = 0
let memoOpen = false
let copyMemoMode = false
let flips = 0
let flip8Streak = 0

volumeSlider.max = "1"
volumeSlider.step = "0.001"
volumeSlider.type = "range"
volumeSlider.value = "0.5"

volumeSlider.oninput = () => {
	music.volume = volumeSlider.valueAsNumber
}

text.innerText = "Volume:"
text.style.color = "white"

music.volume = volumeSlider.valueAsNumber

onmousedown = () => {
	music.play()
}

for (let i = 0; i < 25; i++)
	tiles.push(new Tile(1, 12 + i % 5 * 32, 204 + Math.floor(i / 5) * 32))

const memoPress = new Sprite({
	hidden: true,
	layer: 3,
	texture: txt_memoPress,
	x: tiles[0].sprite.x - 3,
	y: tiles[0].sprite.y - 3
})

for (let i = 0; i < 5; i++) {
	rightInfo.push([
		new Sprite({ x: 180, y: 203 + 32 * i, layer: 1, texture: txt_digitBold0 }),
		new Sprite({ x: 188, y: 203 + 32 * i, layer: 1, texture: txt_digitBold0 }),
		new Sprite({ x: 188, y: 216 + 32 * i, layer: 1, texture: txt_digitBold0 })
	])

	bottomInfo.push([
		new Sprite({ x: 20 + 32 * i, y: 363, layer: 1, texture: txt_digitBold0 }),
		new Sprite({ x: 28 + 32 * i, y: 363, layer: 1, texture: txt_digitBold0 }),
		new Sprite({ x: 28 + 32 * i, y: 376, layer: 1, texture: txt_digitBold0 })
	])

	currentScoreboard.push(new Sprite({ x: 236 - 16 * i, y: 157, layer: 1, texture: txt_digitBig0 }))

	totalScoreboard.push(new Sprite({
		x: 236 - 16 * i,
		y: 117, layer: 1,
		texture: bigDigitSrcs[Math.floor(totalCoins / (10 ** i)) % 10]
	}))
}

let memoTileSelected = tiles[0]

for (let i = 0; i < 4; i++)
	memoButtons.push(new Sprite({
		x: memoButton.x + 3 + i % 2 * 24,
		y: memoButton.y + 71 + Math.floor(i / 2) * 24,
		layer: 2,
		hidden: true,
		onCursorEnter: () => {
			if (memoOpen && !memoTileSelected.flipped) {
				tileHover.texture = txt_buttonMemoHover
				tileHover.x = memoButtons[i].x - 2
				tileHover.y = memoButtons[i].y - 2
				tileHover.hidden = false
			}
		},
		onCursorLeave: () => {
			tileHover.hidden = true
		}
	}))

music.autoplay = true

music.onended = () => {
	music = musicLoop
	music.loop = true
	music.volume = volumeSlider.valueAsNumber
	music.play()
}

// canvas.onmousemove = (event) => {
// 	const { clientX, clientY, ctrlKey, buttons } = event
// 	const x = (clientX - canvas.offsetLeft) / scale
// 	const y = (clientY - canvas.offsetTop) / scale

// 	if (active) {
// 		if (ctrlKey && buttons == 1 && canvas.onmouseup)
// 			canvas.onmouseup(event)
// 		else {
// 			tileHover.hidden = true

// 			for (const tile of tiles) {
// 				if (tile.sprite.overlapsPoint(x, y) && (!tile.flipped || memoOpen)) {
// 					tileHover.texture = [ txt_tileHover, txt_memoHover ][Number(memoOpen)]
// 					tileHover.x = tile.sprite.x - 3
// 					tileHover.y = tile.sprite.y - 3
// 					tileHover.hidden = false

// 					break
// 				}
// 			}

// 			if (memoOpen && !memoTileSelected.flipped) {
// 				for (const button of memoButtons) {
// 					if (button.overlapsPoint(x, y)) {
// 						tileHover.texture = txt_buttonMemoHover
// 						tileHover.x = button.x - 2
// 						tileHover.y = button.y - 2
// 						tileHover.hidden = false

// 						break
// 					}
// 				}

// 				if (sMemoButton.overlapsPoint(x, y)) {
// 					tileHover.texture = txt_buttonMemoHover
// 					tileHover.x = sMemoButton.x - 2
// 					tileHover.y = sMemoButton.y - 2
// 					tileHover.hidden = false
// 				}
// 			}
// 		}
// 	}
// }

// canvas.onmouseup = ({ clientX, clientY }) => {
// 	const x = (clientX - canvas.offsetLeft) / scale
// 	const y = (clientY - canvas.offsetTop) / scale

// 	if (active) {
// 		if (memoOpen) {
// 			for (const tile of tiles)
// 				if (tile.sprite.overlapsPoint(x, y)) {
// 					if (!memoTileSelected.flipped && !tile.flipped && copyMemoMode) {
// 						for (let i = 0; i < 4; i++)
// 							tile.memos[i].hidden = memoTileSelected.memos[i].hidden

// 						tile.sprite.texture = memoTileSelected.sprite.texture
// 						tile.sprite.layer = memoTileSelected.sprite.layer
// 					}

// 					memoTileSelected = tile
// 					memoPress.x = tile.sprite.x - 3
// 					memoPress.y = tile.sprite.y - 3

// 					for (let i = 0; i < 4; i++)
// 						memoButtons[i].texture = memoButtonSrcs[Number(!memoTileSelected.memos[i].hidden)][i]

// 					break
// 				}

// 			if (!memoTileSelected.flipped) {
// 				if (sMemoButton.overlapsPoint(x, y))
// 					sMemoButton.texture = [ txt_buttonMemoSOff, txt_buttonMemoSOn ][Number(copyMemoMode = !copyMemoMode)]

// 				const memos = memoTileSelected.memos

// 				for (let i = 0; i < 4; i++) {
// 					const button = memoButtons[i]

// 					if (button.overlapsPoint(x, y)) {
// 						const memo = memos[i]
// 						const memosOn: number[] = []

// 						memo.hidden = !memo.hidden

// 						for (let i = 0; i < memos.length; i++)
// 							memos[i].hidden || memosOn.push(i)

// 						button.texture = memoButtonSrcs[Number(!memo.hidden)][i]

// 						if (memosOn.length == 1) {
// 							memoTileSelected.sprite.texture = [ txt_tileMemo0, txt_tileMemo1, txt_tileMemo2, txt_tileMemo3 ][memosOn[0]]
// 							memoTileSelected.sprite.layer = 4
// 						} else {
// 							memoTileSelected.sprite.texture = txt_tileBlank
// 							memoTileSelected.sprite.layer = 1
// 						}

// 						break
// 					}
// 				}
// 			}
// 		} else
// 			for (const tile of tiles) {
// 				if (!tile.flipped && tile.sprite.overlapsPoint(x, y)) {
// 					const oldCurrentCoins = currentCoins

// 					tileHover.hidden = true

// 					for (const memo of tile.memos)
// 						memo.hidden = true

// 					if (memoTileSelected == tile)
// 						for (let i = 0; i < 4; i++)
// 							memoButtons[i].texture = memoButtonSrcs[0][i]

// 					if (currentCoins)
// 						currentCoins *= tile.value
// 					else
// 						currentCoins = tile.value

// 					tile.flipped = true

// 					if (currentCoins == maxCoins) {
// 						const oldTotal = totalCoins
// 						totalCoins += currentCoins
// 						active = false

// 						if (flips + 1 > 7)
// 							flip8Streak++
// 						else
// 							flip8Streak = 0

// 						if (flip8Streak > 4)
// 							level = 8
// 						else
// 							level < 8 && level++

// 						postProcessing.push(playAnimationsSync(
// 							tileFlip(tile),
// 							playAnimationsAsync(
// 								success(tile),
// 								playAnimationsSync(
// 									transitionsScoreboard(currentScoreboard, oldCurrentCoins, currentCoins),
// 									skipFrames(12),
// 									playAnimationsAsync(
// 										transitionsScoreboard(totalScoreboard, oldTotal, totalCoins),
// 										transitionsScoreboard(currentScoreboard, currentCoins, 0),
// 										finish()
// 									)
// 								)
// 							)
// 						))
// 					} else {
// 						if (currentCoins) {
// 							flips++

// 							postProcessing.push(playAnimationsSync(
// 								tileFlip(tile),
// 								playAnimationsAsync(
// 									success(tile),
// 									transitionsScoreboard(currentScoreboard, oldCurrentCoins, currentCoins)
// 								)
// 							))
// 						} else {
// 							level = Math.max(Math.min(flips, level), 1)
// 							flip8Streak = 0
// 							active = false

// 							postProcessing.push(playAnimationsSync(
// 								tileFlip(tile),
// 								blowup(tile),
// 								transitionsScoreboard(currentScoreboard, oldCurrentCoins, currentCoins),
// 								finish()
// 							))
// 						}
// 					}

// 					break
// 				}
// 			}
// 	}
// }

onblur = () => {
	music.pause()
}

onfocus = () => {
	music.play()
}

// canvas.onmousedown = (event) => {
// 	const { clientX, clientY, ctrlKey, buttons } = event

// 	if (ctrlKey && buttons == 1 && canvas.onmouseup)
// 		canvas.onmouseup(event)
// 	else {
// 		const x = (clientX - canvas.offsetLeft) / scale
// 		const y = (clientY - canvas.offsetTop) / scale

// 		if (active && memoButton.overlapsPoint(x, y)) {
// 			memoPress.hidden = !(memoOpen = !memoOpen)
// 			postProcessing.push(memoButtonPress())
// 		}
// 	}
// }

// canvas.onmouseleave = canvas.onmousemove

// {
// 	main()

// 	function main(time?: number) {
// 		requestAnimationFrame(main)

// 		if (context) {
// 			const postprocFinished: number[] = []

// 			context.clearRect(0, 0, canvas.width, canvas.height)
// 			Sprite.drawAll()

// 			for (let i = 0; i < postProcessing.length; i++)
// 				postProcessing[i].next().done &&
// 					postprocFinished.push(i)

// 			for (const animationDone of postprocFinished.reverse())
// 				postProcessing.splice(animationDone, 1)
// 		}
// 	}
// }

setup()
// updateSize()

function setup() {
	const tileValues = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
	const toSet = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
	const levelStats = levels[level][Math.floor(Math.random() * 5)]

	copyMemoMode = false
	sMemoButton.texture = txt_buttonMemoSOff
	currentCoins = 0
	maxCoins = levelStats[3]
	flips = 0

	for (let i = 0; i < 4; i++)
		memoButtons[i].texture = memoButtonSrcs[0][i]

	for (let i = 0; i < 3; i++)
		for (let j = 0; j < levelStats[i]; j++)
			tileValues[toSet.splice(Math.floor(Math.random() * toSet.length), 1)[0]] = (i + 2) % 4

	for (let i = 0; i < 25; i++) {
		const tile = tiles[i]

		tile.value = tileValues[i]
		tile.flipped = false
		tile.sprite.texture = txt_tileBlank
	}

	for (let i = 0; i < 5; i++) {
		let coins = 0
		let voltorbs = 0

		for (let j = 0; j < 5; j++) {
			const value = tiles[i * 5 + j].value
			value ? coins += value : voltorbs++
		}

		rightInfo[i][0].texture = boldDigitSrcs[Math.floor(coins / 10)]
		rightInfo[i][1].texture = boldDigitSrcs[coins % 10]
		rightInfo[i][2].texture = boldDigitSrcs[voltorbs]

		coins = 0
		voltorbs = 0

		for (let j = 0; j < 5; j++) {
			const value = tiles[j * 5 + i].value
			value ? coins += value : voltorbs++
		}

		bottomInfo[i][0].texture = boldDigitSrcs[Math.floor(coins / 10)]
		bottomInfo[i][1].texture = boldDigitSrcs[coins % 10]
		bottomInfo[i][2].texture = boldDigitSrcs[voltorbs]

	}

	for (const sprite of currentScoreboard)
		sprite.texture = txt_digitBig0

	active = true
}

// function updateSize() {
// 	scale = Math.min(window.innerHeight / canvas.height, window.innerWidth / canvas.width)

// 	if (scale > 1) {
// 		if (window.innerHeight < window.innerWidth)
// 			scale = Math.floor(scale)
		
// 		canvas.className = "nearestNeigbour"
// 	} else
// 		canvas.className = ""

// 	canvas.style.height = `${canvas.height * scale}px`
// 	canvas.style.width = `${canvas.width * scale}px`
	// volumeSlider.style.width = canvas.style.width
	// volumeSlider.style.marginLeft = `${(window.innerWidth - canvas.width * scale) / 2}px`
	// text.style.marginLeft = volumeSlider.style.marginLeft
// }

addEventListener("resize", () => {
	volumeSlider.style.width = canvas.style.width
	volumeSlider.style.marginLeft = canvas.offsetLeft + "px"
	text.style.marginLeft = volumeSlider.style.marginLeft
})

function* tileFlip(tile: Tile) {
	tile.sprite.texture = txt_tileFlip0
	tile.sprite.x += 3

	yield* skipFrames(6)
	tile.sprite.texture = txt_tileFlip1
	tile.sprite.x += 6

	yield* skipFrames(6)
	tile.sprite.texture = tileFlipSrcs[tile.value]
	tile.sprite.x -= 4

	yield* skipFrames(6)
	tile.sprite.texture = [ txt_tile0, txt_tile1, txt_tile2, txt_tile3 ][tile.value]
	tile.sprite.x -= 5
}

function* transitionsScoreboard(scoreboard: Sprite[], from: number, to: number) {
	while (from != to) {
		from > to ? from-- : from++

		for (let i = 0; i < 5; i++)
			scoreboard[i].texture = bigDigitSrcs[Math.floor(from / (10 ** i)) % 10]

		yield
	}
}

// function* darkenScreen() {
// 	if (context) {
// 		let i = 0

// 		while (1) {
// 			context.fillStyle = "#000000" + (i < 129 ? i += 2 : i).toString(16)
// 			context.beginPath()
// 			context.fillRect(0, 190, canvas.width, 207)
// 			yield
// 		}
// 	}
// }

function* memoButtonPress() {
	memoButton.texture = [ txt_buttonMemoOpenPress, txt_buttonMemoClosePress ][Number(memoOpen)]

	yield* skipFrames(6)

	memoButton.texture = [ txt_buttonMemoOpen, txt_buttonMemoClose ][Number(memoOpen)]

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

		sMemoButton.hidden = false
	} else {
		for (let i = 0; i < 4; i++)
			memoButtons[i].hidden = true

		sMemoButton.hidden = true

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

	tile.sprite.texture = txt_tileExplode0

	yield* skipFrames(6)

	tile.sprite.texture = txt_tileExplode1

	yield* skipFrames(6)

	tile.sprite.texture = txt_tileExplode2

	yield* skipFrames(6)

	tile.sprite.texture = txt_tileExplode3
	tile.sprite.x -= 6
	tile.sprite.y -= 6

	yield* skipFrames(6)

	tile.sprite.texture = txt_tileExplode4
	tile.sprite.x -= 4
	tile.sprite.y -= 4

	yield* skipFrames(6)

	tile.sprite.texture = txt_tileExplode5
	tile.sprite.x -= 7
	tile.sprite.y -= 7

	yield* skipFrames(6)

	tile.sprite.texture = txt_tileExplode6
	tile.sprite.x -= 2
	tile.sprite.y -= 2

	yield* skipFrames(6)

	tile.sprite.texture = txt_tileExplode7
	tile.sprite.x -= 1
	tile.sprite.y -= 1

	yield* skipFrames(6)

	tile.sprite.texture = txt_tileExplode8
	tile.sprite.x -= 1
	tile.sprite.y -= 1

	yield* skipFrames(6)

	tile.sprite.texture = txt_tile0
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

		const scripts: Generator[] = []

		if (!tile.flipped)
			scripts.push(tileFlip(tile))

		scripts.push(function* () {
			yield* skipFrames(60 + i % 5 * 12)

			tile.sprite.texture = tileFlipSrcs[tile.value]
			tile.sprite.x += 5

			yield* skipFrames(6)

			tile.sprite.texture = txt_tileFlip1
			tile.sprite.x += 4

			yield* skipFrames(6)

			tile.sprite.texture = txt_tileFlip0
			tile.sprite.x -= 6

			yield* skipFrames(6)

			tile.sprite.texture = txt_tileBlank
			tile.sprite.x -= 3

			if (i == 24) {
				levelNumber.texture = thinDigitSrcs[level] || txt_missing
				setup()
			}
		}())

		tile.sprite.scripts.push(...scripts)
	}
}

function* success({ sprite: { x, y } }: Tile) {
	if (context) {
		let images = [
			txt_success0,
			txt_success1,
			txt_success2,
			txt_success3
		]

		for (let i = 0; i < 4; i++)
			for (let j = 0; j < 6; j++) {
				context.drawImage(images[i], x - 13, y - 13)
				yield
			}
	}
}
