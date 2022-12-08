import React, { useEffect, useState } from 'react';

function Cat() {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [urlCat, setUrlCat] = useState([])

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(res => setUrlCat(res))
        }, []
    )
    return (
        <div>
            <h4>Кошка</h4>
            <p>
                {count}<br />
                <button onClick={() => setCount(count + 1)}>+</button>
            </p>
            <p>
                {count2}<br />
                <button onClick={() => setCount2(count2 + 1)}>+</button>
            </p>
            <div>
                {
                    urlCat.map(
                        (item, index) => {
                            return <h3>{index + 1}. {item.name}</h3>
                        }
                    )
                }
            </div>
        </div>
    )
}


export default Cat;