import { useState } from 'react';
import { Button } from './components/Button/Button';

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <Button onClick={() => setCounter(counter + 1)}>count is {counter}</Button>
    );
}