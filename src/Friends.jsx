import { use } from "react"
import Friend from './Friend'

export default function Friends ({fetchPromise}) {

    const friends = use(fetchPromise)

    return(
        <div className='card'>
            <h3>Android Users: {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)

            }
        </div>
    )
}