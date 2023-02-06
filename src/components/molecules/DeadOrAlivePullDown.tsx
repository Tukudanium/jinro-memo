import * as React from 'react'
import { FormControl, Typography, MenuItem, Select } from '@mui/material'

const deadOrAliveValue = {
	alive: '生存',
	dead: '死亡'
}
type Props = {
	deadOrAlive: string
	setDeadOrAlive: Function
}
export default function DeadOrAlivePullDown(props: Props) {
	return (
		<Select
			sx={{ m: 1, minWidth: 100 }}
			value={props.deadOrAlive || ''}
			onChange={(event) => props.setDeadOrAlive(event.target.value)}
		>
			<MenuItem value={deadOrAliveValue.alive}>{deadOrAliveValue.alive}</MenuItem>
			<MenuItem value={deadOrAliveValue.dead}>{deadOrAliveValue.dead}</MenuItem>
		</Select>
	)
}
