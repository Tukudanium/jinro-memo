import * as React from 'react'
import { Typography } from '@mui/material'

type Props = {
	value: string
}
export default function CardContentsLabel(props: Props) {
	return <Typography sx={{ ml: '15px' }}>{props.value}</Typography>
}
