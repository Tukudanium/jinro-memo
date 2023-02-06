import * as React from 'react'
import {
	Box,
	Button,
	Card,
	CardContent,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import PlayerJobPullDown from '../molecules/PlayerJobPullDown'
import CardContentsLabel from '../atomic/CardContentsLabel'
import DeadOrAlivePullDown from '../molecules/DeadOrAlivePullDown'

const deadOrAliveValue = {
	alive: '生存',
	dead: '死亡'
}

type jobObj = {
	jobName: string
	color: string
}
type Props = {
	playerName: string
	jobList_1st: string[]
	jobList_2nd: string[]
	jobList_3rd: string[]
}
export default function PlayerDataCard(props: Props) {
	const [jobList, setJobList] = React.useState<jobObj[]>([])
	const [comingOutJob, setComingOutJob] = React.useState<string>('none')
	const [divinationJob_1st, setDivinationJob_1st] = React.useState<string>('none')
	const [divinationJob_2nd, setDivinationJob_2nd] = React.useState<string>('none')
	const [ConfirmJob, setConfirmJob] = React.useState<string>('none')
	const [deadOrAlive, setDeadOrAlive] = React.useState<string>(deadOrAliveValue.alive)

	const [selectedColor, setSelectedColor] = React.useState<string>('success.light')
	const [CardColor, setCardColor] = React.useState<string>('success.light')
	const [memoViewFlag, setMemoViewFlag] = React.useState<boolean>(false)

	React.useEffect(() => {
		let nextJobList: jobObj[] = []
		nextJobList.push({
			jobName: '白',
			color: '#77ff77'
		})
		if (props.jobList_1st.length !== 0) {
			for (const item of props.jobList_1st) {
				nextJobList.push({
					jobName: item,
					color: '#77ff77'
				})
			}
		}
		nextJobList.push({
			jobName: '黒',
			color: '#ff7777'
		})
		if (props.jobList_2nd.length !== 0) {
			for (const item of props.jobList_2nd) {
				nextJobList.push({
					jobName: item,
					color: '#ff7777'
				})
			}
		}
		if (props.jobList_3rd.length !== 0) {
			nextJobList.push({
				jobName: '第３陣営',
				color: '#7777ff'
			})
			for (const item of props.jobList_3rd) {
				nextJobList.push({
					jobName: item,
					color: '#7777ff'
				})
			}
		}
		setJobList(nextJobList)
	}, [props])
	React.useEffect(() => {
		console.log(selectedColor)
		if (deadOrAlive === deadOrAliveValue.dead) {
			setCardColor('#777777')
		} else {
			console.log(diluteColorCode(selectedColor))
			setCardColor(diluteColorCode(selectedColor))
		}
	}, [selectedColor, deadOrAlive])

	function diluteColorCode(colorCode: string) {
		if (colorCode[0] !== '#') return colorCode
		const splitedColorCode: string[] = []
		splitedColorCode.push(colorCode.substring(0, 1))
		splitedColorCode.push(colorCode.substring(1, 3))
		splitedColorCode.push(colorCode.substring(3, 5))
		splitedColorCode.push(colorCode.substring(5, 7))

		splitedColorCode[1] =
			Math.round(parseInt(splitedColorCode[1], 16) * 1.3) < 255
				? Math.round(parseInt(splitedColorCode[1], 16) * 1.3).toString(16)
				: 'ff'
		splitedColorCode[2] =
			Math.round(parseInt(splitedColorCode[2], 16) * 1.3) < 255
				? Math.round(parseInt(splitedColorCode[2], 16) * 1.3).toString(16)
				: 'ff'
		splitedColorCode[3] =
			Math.round(parseInt(splitedColorCode[3], 16) * 1.3) < 255
				? Math.round(parseInt(splitedColorCode[3], 16) * 1.3).toString(16)
				: 'ff'

		return splitedColorCode.join('')
	}
	return (
		<Card sx={{ bgcolor: CardColor, textAlign: 'start', mb: '10px' }}>
			<Box sx={{ m: '5px' }}>
				<Typography sx={{ mt: 2, ml: 2 }} variant="h5">
					{props.playerName}
				</Typography>
				<Grid container>
					<Grid item sx={{ mt: 2 }}>
						<FormControl sx={{ m: 1, minWidth: 180 }} size="small">
							<CardContentsLabel value={'CO役職'} />
							<PlayerJobPullDown
								jobList={jobList}
								jobValue={comingOutJob}
								setJobValue={setComingOutJob}
								setSelectedColor={undefined}
							></PlayerJobPullDown>
						</FormControl>
					</Grid>
					<Grid item display="grid" sx={{ mt: 2 }}>
						<FormControl sx={{ m: 1, minWidth: 160 }} size="small">
							<CardContentsLabel value={'占い結果'} />
							<PlayerJobPullDown
								jobList={jobList}
								jobValue={divinationJob_1st}
								setJobValue={setDivinationJob_1st}
								setSelectedColor={undefined}
							></PlayerJobPullDown>
						</FormControl>
						<FormControl sx={{ m: 1, minWidth: 160 }} size="small">
							<PlayerJobPullDown
								jobList={jobList}
								jobValue={divinationJob_2nd}
								setJobValue={setDivinationJob_2nd}
								setSelectedColor={undefined}
							></PlayerJobPullDown>
						</FormControl>
					</Grid>
					<Grid item sx={{ mt: 2 }}>
						<FormControl sx={{ m: 1, minWidth: 160 }} size="small">
							<CardContentsLabel value={'仮確定役職'} />
							<PlayerJobPullDown
								jobList={jobList}
								jobValue={ConfirmJob}
								setJobValue={setConfirmJob}
								setSelectedColor={setSelectedColor}
							></PlayerJobPullDown>
						</FormControl>
					</Grid>
					<Grid item sx={{ mt: 2 }}>
						<FormControl sx={{ m: 1, minWidth: 160 }} size="small">
							<CardContentsLabel value={'生死'} />
							<DeadOrAlivePullDown
								deadOrAlive={deadOrAlive}
								setDeadOrAlive={setDeadOrAlive}
							></DeadOrAlivePullDown>
						</FormControl>
					</Grid>
					<Grid item sx={{ mt: 2 }}>
						<FormControl sx={{ m: 1, minWidth: 160 }} size="small">
							<Box display={'flex'} width={'fit-content'} onClick={() => setMemoViewFlag(!memoViewFlag)}>
								<CardContentsLabel value={'メモ'} />
								{memoViewFlag ? (
									<KeyboardArrowUpIcon sx={{ ml: 2 }} />
								) : (
									<KeyboardArrowDownIcon sx={{ ml: 2 }} />
								)}
							</Box>
							{memoViewFlag && <TextField placeholder="メモ" multiline minRows={4} />}
						</FormControl>
					</Grid>
				</Grid>
			</Box>
		</Card>
	)
}