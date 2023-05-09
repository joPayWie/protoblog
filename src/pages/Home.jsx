import { BlogPosts } from '../components/BlogPosts'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <Link to="/newPost">New post</Link>
      This is our homepage!
      <BlogPosts />
    </div>
  )
}
