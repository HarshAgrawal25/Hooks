import React, {useState} from 'react'

function HookCounterTwo() {
    const initialcount = 0;
    const [count, setcount] = useState(initialcount)

    const incrementfive = () => {
        for(let i=0;i<5;i++){
            setcount(prevCount => prevCount +1)
        }
    }
    const incrementten = () => {
        for(let i=0;i<10;i++){
            setcount(prevCount => prevCount +1)
        }
    }


    return (
        <div>
            <div>Count : {count}</div>
            <br />
            <button onClick={() => setcount(initialcount)}>Reset</button>
            <button onClick={() => setcount(prevCount => prevCount + 1 )}>Increment</button>
            <button onClick={() => setcount(prevCount => prevCount - 1)}>Decrement</button>
            //Button for increement the value by 5 and 10.
            <button onClick={incrementfive}>Increment 5</button>
            <button onClick={incrementten}>Increment 10</button>

        </div>
    )
}

export default HookCounterTwo
