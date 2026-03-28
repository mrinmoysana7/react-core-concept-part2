import { useState } from "react"

export default function Bowler () {
    const [bowls, setBowls] = useState(0);
    const [overs, setOvers] = useState(0);

    const bowlHandler = () => {
        const updateBowl = bowls + 1;
        const updateOvers = overs + 1;
        setOvers(updateOvers)
        setBowls(updateBowl)
    }

    return(
        <div>
            <h3>Bowler: Jasprit Bumrah</h3>
            <p>Overs: {overs}</p>
            {
                bowls >= 6 && <p>Over Complete</p> 
            }
            <h1>Bowls: {bowls}</h1>
            <button onClick={bowlHandler}>Do Bowl</button>
        </div>
    )
}