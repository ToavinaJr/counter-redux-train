import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount , reset} from "./counterSlice"
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state: { counter: { count: number } }) => state.counter.count );
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    // const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }
    return (
        <div
            style={{display: 'flex', flexDirection: 'column', gap: "10px", }}
        >
            <div style={{display: "flex", alignContent: 'center', justifyContent: 'center', gap: "10px"}}>
                <button onClick={() => dispatch(decrement())} style={{background: 'orange'}}>Moins</button>
                <button style={{display: "flex", alignContent: 'center', justifyContent: 'center', gap: "10px"}}>{count}</button>
                <button onClick={() => dispatch(increment())} style={{background: 'blue'}}>Plus</button>
            </div>   

            <button onClick={() => dispatch(incrementByAmount(incrementAmount))}> Increment by {incrementAmount} </button>
            <button style={{color: "white", background: "red"}} onClick={() => resetAll() }>Reset</button>

            <input 
                style={{padding: "10px"}}
                type="number" 
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(Number(e.target.value))}
            />
        </div>
    )
}

export default Counter