import { useSelector } from 'react-redux';

const Test = () => {
    const count = useSelector((state: { counter: { count: number } }) => state.counter.count );

    return (
        <button>{count}</button>
    )
}

export default Test