import * as React from 'react'
import { FormControl, Typography, MenuItem, Select } from '@mui/material'

type jobObj = {
	jobName: string
	color: string
}
type Props = {
	jobList: jobObj[]
	jobValue: string
	setJobValue: Function
	setSelectedColor: Function | undefined
}
export default function PlayerJobPullDown(props: Props) {
	const defaultColor: string = 'success.light'
	const [bgColor, setBgColor] = React.useState<string>(defaultColor)
	function changeBgColor(color: string) {
		setBgColor(color)
		if (props.setSelectedColor !== undefined) props.setSelectedColor(color)
	}
	return (
		<Select
			sx={{ m: 1, minWidth: 180, bgcolor: bgColor }}
			value={props.jobValue || ''}
			onChange={(event) => props.setJobValue(event.target.value)}
		>
			<MenuItem
				value="none"
				sx={{ bgcolor: defaultColor, '&:hover': { bgcolor: defaultColor } }}
				onClick={() => changeBgColor(defaultColor)}
			>
				<em>未選択</em>
			</MenuItem>
			{props.jobList.map((value, index) => (
				<MenuItem
					key={index}
					style={{ backgroundColor: value.color }}
					value={value.jobName}
					onClick={() => changeBgColor(value.color)}
				>
					{value.jobName}
				</MenuItem>
			))}
		</Select>
	)
}
