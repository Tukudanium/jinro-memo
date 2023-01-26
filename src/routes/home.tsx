import { Link, useNavigate, useParams } from 'react-router-dom'

type Param = {
	id?: string
}
function Home() {
	const params: Param = useParams<Param>()
	return (
		<div>
			<p>homo</p>
			<p>{`id=${params?.id}`}</p>
		</div>
	)
}

export default Home
