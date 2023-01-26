type Props = {
	id?: string
}

function CompornentSample(props: Props) {
	return <div>{`sample${props.id}`}</div>
}

export default CompornentSample
