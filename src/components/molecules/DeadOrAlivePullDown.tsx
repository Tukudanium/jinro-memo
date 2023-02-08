import * as React from 'react'
import { MenuItem, Select } from '@mui/material'
import { DEAD_OR_ALIVE } from '../../constants'

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
			<MenuItem value={DEAD_OR_ALIVE.alive}>{DEAD_OR_ALIVE.alive}</MenuItem>
			<MenuItem value={DEAD_OR_ALIVE.dead}>{DEAD_OR_ALIVE.dead}</MenuItem>
		</Select>
	)
}
