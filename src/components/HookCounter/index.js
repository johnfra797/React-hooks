import React, { useState, useEffect } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('useEffect');
        document.title = `You clicked ${count} times`;
    },[count])

    return (
        <div>
            <input type='text' value={name} onChange={e=> setName(e.target.value)}></input>
            <button onClick={() => setCount(count + 1)}> Count {count}</button>
        </div>
    )
}

export default HookCounter;