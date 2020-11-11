import React,{useEffect} from 'react'
import useCounter from '../hooks/useCounter'
import useDocumentTitle from '../hooks/useDocumentTitle'

function CounterOne() {
    const [count, increment, decrement, reset] = useCounter(0, 1)
    useDocumentTitle(count)
	return (
		<div>
			<h2>Count = {count}</h2>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
}

export default CounterOne