import { Link } from 'react-router-dom'

export const Post = ({ post }) => {
  return (
    <div style={{ border: 'solid black 1px' }}>
      <h1>{post.title}</h1>
      <h2>{post.user}</h2>
      <Link
        to={`/${post.id}`}
        style={{ border: 'solid gray 1px', backgroundColor: 'lightgray' }}
      >
        Detalles
      </Link>
    </div>
  )
}
