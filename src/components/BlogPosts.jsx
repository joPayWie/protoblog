import { Post } from './Post'
import { posts } from '../data/posts'

export const BlogPosts = () => {
  return (
    <div>
      <h1>Estos son nuestros posts más recientes</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
