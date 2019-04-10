import React, { useState } from 'react'

const HelloWorld = () => {
    const [name, setName] = useState('World')
    const [count, setCount] = useState(0)

    const clickClick = () => {
        setCount(count + 1)
        setName('Liz')
    }

    return (
        <div>
            <h1>Hello {name}</h1>
            <p>You click {count} times</p>
            <button onClick={() => clickClick()}>
                Click Me
            </button>
        </div>
    )
}

export default HelloWorld