export default function User({user}) {
    const {name, email, username, phone, website} = user;
    return(
        <div className='card'>
            <h3>Name: {name}</h3>
            <h3> Email: {email}</h3>
            <h3>Username: {username}</h3>
            <h3>Phone: {phone}</h3>
            <h3>Website: {website}</h3>
        </div>
    )
}