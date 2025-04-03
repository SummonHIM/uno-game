import { GameStatus } from "@uno-game/protocols"
import React from "react"
import { Grid, Typography, Button } from "@material-ui/core"

import useStyles from "@/components/Menu/GameItem/styles"
import useCustomStyles from "@/styles/custom"

import { StatusMap, statusColorMap } from "@/utils/game"

type GameItemProps = {
	playersCount: number
	name: string
	status: GameStatus
}

const statusTextMap: StatusMap<string> = {
	playing: "正在游玩",
	ended: "已经结束",
	waiting: "正在等待",
}

const GameItem: React.FC<GameItemProps> = (props) => {
	const { playersCount, name, status } = props

	const classes = useStyles()
	const customClasses = useCustomStyles({ limitedNameWidth: 70 })

	const color = statusColorMap[status]
	const statusText = statusTextMap[status]

	return (
		<Grid
			container
			justify="space-between"
			alignItems="center"
			className={classes.container}
			style={{
				border: `2px solid ${color}`,
			}}
		>
			<Grid
				item
				style={{
					color,
				}}
			>
				<Typography
					variant="h2"
					className={customClasses.limitedName}
				>
					{name}
				</Typography>

				<Typography variant="caption">
					{playersCount} 名玩家
				</Typography>
			</Grid>

			<Grid
				item
				style={{
					color,
				}}
			>
				<Typography variant="caption">
					{statusText}
				</Typography>
			</Grid>

			<Grid item>
				<Button
					className={classes.button}
					style={{
						backgroundColor: color,
					}}
				>
					加入
				</Button>
			</Grid>
		</Grid>
	)
}

export default GameItem
