import React, { useState, useEffect } from 'react'
import axios from 'axios'

function HookDataFetchingTwo() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButton, setIdFromButton] = useState(1);

    const handleClick = () => {
        setIdFromButton(id);
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`).then(res => {
            setPost(res.data);
        }
        ).catch(err => {
            console.log(err);
        })
    }, [idFromButton])




    return (
        <div>
            <input type="text" value={id} onChange={e=> setId(e.target.value)}></input>
            <button type="button" onClick={handleClick} >Search</button>
           <p>
               {post.title}
           </p>
        </div>
    )
}

export default HookDataFetchingTwo;