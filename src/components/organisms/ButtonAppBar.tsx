import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import MenuIcon from '@mui/icons-material/Menu'
import AddIcon from '@mui/icons-material/Add'
import AppBarInputList from '../molecules/AppBarInputList'
import {
	Button,
	Divider,
	Drawer,
	FormControl,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	MenuItem,
	Select
} from '@mui/material'
import { JOB_TEMPLATE } from '../../constants'

type Props = {
	setPlayerList: Function
	setJobList_1st: Function
	setJobList_2nd: Function
	setJobList_3rd: Function
}
export default function ButtonAppBar(props: Props) {
	const [isOpen, setIsOpen] = React.useState<boolean>(false) // ドロワー開閉フラグ

	// 各コンポーネントから設定内容を受け取るstate
	const [playerList, setPlayerList] = React.useState<string[]>([''])
	const [jobList_1st, setJobList_1st] = React.useState<string[]>([''])
	const [jobList_2nd, setJobList_2nd] = React.useState<string[]>([''])
	const [jobList_3rd, setJobList_3rd] = React.useState<string[]>([''])

	// 各コンポーネントの開閉フラグ ここにないとドロワー開閉のたびにリセットされるので
	const [playerPullDownFlag, setPlayerPullDownFlag] = React.useState<boolean>(false)
	const [jobPullDownFlag_1st, setJobPullDownFlag_1st] = React.useState<boolean>(false)
	const [jobPullDownFlag_2nd, setJobPullDownFlag_2nd] = React.useState<boolean>(false)
	const [jobPullDownFlag_3rd, setJobPullDownFlag_3rd] = React.useState<boolean>(false)

	// テンプレートの選択インデックスを文字列にして保存
	const [templateIndex, setTemplateIndex] = React.useState<string>('none')

	function toggleDrawerMenu() {
		setIsOpen(!isOpen)
	}
	// 反映ボタンを押したら、ページに設定内容を反映する
	function settingImport() {
		props.setPlayerList(playerList.filter((value) => value !== ''))
		props.setJobList_1st(jobList_1st.filter((value) => value !== ''))
		props.setJobList_2nd(jobList_2nd.filter((value) => value !== ''))
		props.setJobList_3rd(jobList_3rd.filter((value) => value !== ''))
	}
	// テンプレートを取得し反映する
	function setTemplate() {
		if (templateIndex === 'none' || Number(templateIndex)) return
		const selectTemplate = JOB_TEMPLATE[Number(templateIndex)]
		if (selectTemplate === undefined) return
		if (
			window.confirm(
				`${selectTemplate.name}のテンプレートを設定します。\n現在入力している役職はリセットされます。`
			)
		) {
			setJobList_1st(selectTemplate.jobList_1st.filter((value) => value !== ''))
			setJobList_2nd(selectTemplate.jobList_2nd.filter((value) => value !== ''))
			setJobList_3rd(selectTemplate.jobList_3rd.filter((value) => value !== ''))
		}
	}
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar>
				<Toolbar>
					<IconButton
						onClick={toggleDrawerMenu}
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						人狼メモ
					</Typography>
				</Toolbar>
			</AppBar>
			<Box sx={{ height: 64 }}></Box>
			<Drawer
				sx={{
					width: 350,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: 350,
						bgcolor: 'secondary.main',
						color: '#fff'
					}
				}}
				anchor="left"
				open={isOpen}
				onClose={toggleDrawerMenu}
			>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						設定
					</Typography>
					<IconButton onClick={toggleDrawerMenu} edge="end" color="inherit" aria-label="menu">
						<ArrowBackIosNewIcon />
					</IconButton>
				</Toolbar>
				<Divider sx={{ bgcolor: 'secondary.light' }} />
				<Box sx={{ overflow: 'auto', flexGrow: 1 }}>
					<AppBarInputList
						settingTitle={'プレイヤー名'}
						settingItemText={'プレイヤー名'}
						listItem={playerList}
						setListItem={setPlayerList}
						pulldownFlag={playerPullDownFlag}
						setPulldownFlag={setPlayerPullDownFlag}
					/>
					<AppBarInputList
						settingTitle={'第１陣営（白）'}
						settingItemText={'役職名'}
						listItem={jobList_1st}
						setListItem={setJobList_1st}
						pulldownFlag={jobPullDownFlag_1st}
						setPulldownFlag={setJobPullDownFlag_1st}
					/>
					<AppBarInputList
						settingTitle={'第２陣営（黒）'}
						settingItemText={'役職名'}
						listItem={jobList_2nd}
						setListItem={setJobList_2nd}
						pulldownFlag={jobPullDownFlag_2nd}
						setPulldownFlag={setJobPullDownFlag_2nd}
					/>
					<AppBarInputList
						settingTitle={'第３陣営（任意）'}
						settingItemText={'役職名'}
						listItem={jobList_3rd}
						setListItem={setJobList_3rd}
						pulldownFlag={jobPullDownFlag_3rd}
						setPulldownFlag={setJobPullDownFlag_3rd}
					/>
				</Box>
				<Toolbar sx={{ bgcolor: 'info.main' }}>
					<Box sx={{ flexGrow: 1 }}>
						<FormControl sx={{ m: 1, minWidth: 180 }} size="small">
							<Select
								sx={{ m: 1, minWidth: 180 }}
								value={templateIndex || 'none'}
								onChange={(event) => setTemplateIndex(event.target.value)}
							>
								<MenuItem value={'none'}>
									<em>テンプレートを選択</em>
								</MenuItem>
								{JOB_TEMPLATE.map((value, index) => (
									<MenuItem key={index} value={String(index)}>
										{value.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Box>

					<Button variant="contained" onClick={setTemplate}>
						適用
					</Button>
				</Toolbar>
				<Divider sx={{ bgcolor: 'secondary.light' }} />
				<Toolbar sx={{ bgcolor: 'info.main' }}>
					<Box sx={{ flexGrow: 1 }}></Box>
					<Button variant="contained" onClick={settingImport}>
						反映
					</Button>
				</Toolbar>
			</Drawer>
		</Box>
	)
}
