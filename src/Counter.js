import React, { useEffect } from 'react';
import {useState} from 'react';

function Counter()
{
    const [count , setCount] = useState(0);
    const update = ()=>
    {
        setCount(count +1);
    }
    const negupdate = ()=>
    {
        set
    }
    useEffect(()=>{
        document.title = `${count}`;
    },[count]);
    return(
        <div>
            <p>{count}</p>
            <button onClick={update}>Increment Counter</button>
        </div>
    );
}
export default Counter;