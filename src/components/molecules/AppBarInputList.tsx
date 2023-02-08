import * as React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { Box, IconButton, Divider, List, ListItemButton, ListItemText, TextField } from '@mui/material'

type Props = {
	settingTitle: string
	settingItemText: string
	listItem: string[]
	setListItem: Function
	pulldownFlag: boolean
	setPulldownFlag: Function
}

const texdtFieldStyle = {
	'& .MuiInputBase-input': {
		color: '#ffffff' // 入力文字の色
	},
	'& label': {
		color: '#ffffff' // 通常時のラベル色
	},
	'& .MuiInput-underline:before': {
		borderBottomColor: '#ffffff' // 通常時のボーダー色
	},
	'& .MuiInput-underline:hover:not(.Mui-disabled):before': {
		borderBottomColor: '#dddddd' // ホバー時のボーダー色
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: '#ffffff' // 通常時のボーダー色(アウトライン)
		},
		'&:hover fieldset': {
			borderColor: '#dddddd' // ホバー時のボーダー色(アウトライン)
		}
	}
}
export default function AppBarInputList(props: Props) {
	function toggleMenu() {
		// メニュー開閉
		props.setPulldownFlag(!props.pulldownFlag)
	}
	function addListItem() {
		// 項目追加
		props.setListItem([...props.listItem, ''])
	}
	function deleteListItem(index: number) {
		// 選択位置の項目削除
		if (props.listItem.length <= 1) return
		const newListItem: string[] = props.listItem.slice(0)
		newListItem.splice(index, 1)
		props.setListItem(newListItem)
	}
	function setListItem(index: number, text: string) {
		// 入力内容で親stateを更新
		const newListItem: string[] = props.listItem.slice(0)
		newListItem[index] = text
		props.setListItem(newListItem)
	}
	return (
		<Box>
			<Divider sx={{ bgcolor: 'secondary.light' }} />
			<ListItemButton onClick={toggleMenu}>
				<ListItemText primary={props.settingTitle} />
				{props.pulldownFlag ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
			</ListItemButton>
			{props.pulldownFlag && (
				<List style={{ justifyContent: 'center' }}>
					<Box>
						{props.listItem.map((value, index) => (
							<Box display="flex" key={index}>
								<ListItemButton>
									<TextField
										sx={texdtFieldStyle}
										fullWidth
										value={value}
										onChange={(event) => setListItem(index, event.target.value)}
										label={props.settingItemText}
										variant="outlined"
										size="small"
									/>
									{props.listItem.length > 1 && <DeleteIcon onClick={() => deleteListItem(index)} />}
								</ListItemButton>
							</Box>
						))}
						<Box display="flex" alignItems="center" justifyContent="center">
							<IconButton onClick={addListItem} color="inherit">
								<AddIcon />
							</IconButton>
						</Box>
					</Box>
				</List>
			)}
			<Divider sx={{ bgcolor: 'secondary.light' }} />
		</Box>
	)
}
