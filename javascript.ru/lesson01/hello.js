import React from 'react'
import {render} from 'react-dom'

function HelloWorld() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

/*
 * Код выше будет отрендерен в элемент с id="root"
 */
render(<HelloWorld/>, document.getElementById('root'));