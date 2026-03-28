import { use } from "react"

export default function Friends ({fetchPromise}) {

    const friends = use(fetchPromise)

    return(
        <div className='card'>
            <h3>Friends: {friends.length}</h3>
        </div>
    )
}