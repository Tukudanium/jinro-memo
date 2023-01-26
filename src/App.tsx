import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './routes/index'
import Home from './routes/home'
import NoMatch from './routes/nomatch'
import './App.css'

function App() {
	return (
		<BrowserRouter>
			<h1>Hello React Router</h1>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/home" element={<Home />}>
					<Route path=":id" element={<Home />} />
				</Route>
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</BrowserRouter>
	)
}
export default App
