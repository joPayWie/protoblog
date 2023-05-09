import { useParams } from 'react-router-dom'
import { useMemo } from 'react'
import { posts } from '../data/posts'

export const PostDetail = () => {
  const { postId } = useParams()

  const post = useMemo(
    () => posts.find((p) => p.id === Number(postId)),
    [postId]
  )

  return (
    <div style={{ border: 'solid black 1px' }}>
      <h1>Post detail</h1>
      <h1>{post.title}</h1>
      <h2>{post.user}</h2>
      <p>{post.content}</p>
    </div>
  )
}
