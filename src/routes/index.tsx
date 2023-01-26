import { Link } from 'react-router-dom'
function Index() {
	return (
		<p>
			This is a demo for React Router.
			<br />
			Check out <a href="https://reactrouter.com">the docs at reactrouter.com</a>.
			<br />
			<Link to="/home">Home</Link>
			<br />
			<Link to="/home/123">Home123</Link>
			<br />
			<Link to="/hoge">nothing</Link>
		</p>
	)
}

export default Index
