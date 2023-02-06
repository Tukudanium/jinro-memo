import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import PlayerDataCard from '../components/organisms/PlayerDataCard'

type Props = {
	playerList: string[]
	jobList_1st: string[]
	jobList_2nd: string[]
	jobList_3rd: string[]
}
export default function Index(props: Props) {
	return (
		<Box>
			{props.playerList.length === 0 ? (
				<Typography variant="h6">左上のメニューから設定を行ってください。</Typography>
			) : (
				props.playerList.map((value, index) => (
					<PlayerDataCard
						key={index}
						playerName={value}
						jobList_1st={props.jobList_1st}
						jobList_2nd={props.jobList_2nd}
						jobList_3rd={props.jobList_3rd}
					></PlayerDataCard>
				))
			)}
		</Box>
	)
}
