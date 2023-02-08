import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Index from './routes/index'
import NoMatch from './routes/nomatch'
import ButtonAppBar from './components/organisms/ButtonAppBar'
import './App.css'
import { Box } from '@mui/material'
import * as React from 'react'

function App() {
	const theme = createTheme({
		palette: {
			primary: {
				light: '#484848',
				main: '#212121',
				dark: '#101010',
				contrastText: '#fff'
			},
			secondary: {
				light: '#4f5b62',
				main: '#263238',
				dark: '#000a12',
				contrastText: '#fff'
			},
			info: {
				light: '#555555',
				main: '#444444',
				dark: '#222222',
				contrastText: '#fff'
			},
			success: {
				light: '#bbbbbb',
				main: '#999999',
				dark: '#777777',
				contrastText: '#fff'
			}
		}
	})

	// ドロワーメニューからページに渡す役職リスト
	const [playerList, setPlayerList] = React.useState([])
	const [jobList_1st, setJobList_1st] = React.useState([])
	const [jobList_2nd, setJobList_2nd] = React.useState([])
	const [jobList_3rd, setJobList_3rd] = React.useState([])

	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<ThemeProvider theme={theme}>
				<ButtonAppBar
					setPlayerList={setPlayerList}
					setJobList_1st={setJobList_1st}
					setJobList_2nd={setJobList_2nd}
					setJobList_3rd={setJobList_3rd}
				></ButtonAppBar>
				<Box id="content">
					<Routes>
						<Route
							path="/"
							element={
								<Index
									playerList={playerList}
									jobList_1st={jobList_1st}
									jobList_2nd={jobList_2nd}
									jobList_3rd={jobList_3rd}
								/>
							}
						/>
						<Route path="*" element={<NoMatch />} />
					</Routes>
				</Box>
			</ThemeProvider>
		</BrowserRouter>
	)
}
export default App
