import React,{useContext} from 'react'
import {UserContext} from '../../../App'
function ComponentC() {

    const useC=useContext(UserContext);
    return (
        <div>
                {
                     <h1>Hello {useC}</h1>
                
                }
        </div>
    )
}

export default ComponentC;