import { useState } from "react";

const App = () => {
    const [counter, setCounter] = useState(0)
    const [values, setValues] = useState([])

    const handleClick = () => {
        setCounter(counter + 1)
        setValues(values.concat(counter))
        console.log(values);
    }

    return (
        <div>
            <h1>Contador: {counter}</h1>
            <button onClick={handleClick}>Incrementarrr</button>
        </div>
    )
}

export default App;