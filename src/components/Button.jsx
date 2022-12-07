import React, { useState } from 'react'

function Button() {

    const [count, setCount] = useState(0)

    const [word, setWord] = useState('Moscow')

    const [isImage, setIsImage] = useState(false)

    return (
        <div>


            <button onClick={() => setCount(count + 1)}>+</button>
            <span style={{ margin: 21 }}>{count}</span>
            <button onClick={() => setCount(count - 1)}>-</button>

            <div onClick={() => setWord('Saint-Petersburg')}>{word}</div>

            {count === 10 &&
                <div>Хватит нажимать, уже 10</div>
            }

            <hr />

            <button onClick={() => setIsImage(!isImage)}>{isImage === true ? "Скрыть" : "Показать"}</button>


            {isImage === true &&
                <img src='https://img1.akspic.ru/previews/7/8/8/9/6/169887/169887-gorod-zdanie-purpur-tsvetnoy-liniya_gorizonta-500x.jpg' alt='Здесь должен быть город' />
            }

        </div>
    )
}

export default Button