// import { useState } from "react"





// export default function Counter() {
//     const [count, setCount] = useState(0);

//     const handleAdd = () => {
//         // console.log(handleAdd)
//         // setCount(5)
//         const newCount = count + 1;
//         setCount(newCount)




//     }

//     const counterStyle = {
//         border: '2px solid red',
//         backgroundColor: 'white'
//     }

//     return(
//         <div style={counterStyle}>
//         <h3>Count: {count} </h3>
//         <button onClick={handleAdd}>Add</button>
//         </div>
//     )
// }

import { useState } from "react";


export default function Counter () {
    const [count, setCount] = useState(0)

    const addHandle = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const countStyle = {
        border: '2px solid cyan',
    }

    return(
        <div style={countStyle}>
            <h3>Count: {count}</h3>
            <button onClick={addHandle}>Add Num</button>
        </div>
    )
}