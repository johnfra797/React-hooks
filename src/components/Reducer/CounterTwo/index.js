import React, { useReducer } from 'react'

const initialState = {
    mainCounter: 0,
    secondCounter: 0
}

const SelectCounter = (state,counter,value,type) => {
    
}

const reducer = (state,action) => {
    switch (action.type) {
        case 'increment':
            if(action.counter=='mainCounter')
            return {...state, mainCounter: state.mainCounter + 1 }
            else 
            return { ...state,secondCounter: state.secondCounter + 1 }

        case 'decrement':
            if(action.counter=='mainCounter')
            return {...state, mainCounter: state.mainCounter - 1 }
            else 
            return {...state, secondCounter: state.secondCounter - 1 }
        case 'reset':
            if(action.counter=='mainCounter')
            return {...state, mainCounter: 0 }
            else 
            return {...state, secondCounter: 0 }
    }
}
function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);


    return (
        <div>
            <div>Main Count {count.mainCounter}</div>
            <div>Second Count {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment',counter:'mainCounter', value: 1  })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' ,counter:'mainCounter', value: 1  })}>Decrement</button>
          <button onClick={() => dispatch({ type: 'reset' ,counter:'mainCounter' })}>Reset</button>
        </div>
    )
}

export default CounterTwo;