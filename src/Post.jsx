export default function Post ({post}) {
    const {id, title, body} = post;
    return (
        <div className='card'>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    )
}