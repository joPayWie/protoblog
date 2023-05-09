import { createContext, useState } from 'react'
import { posts } from '../data/posts'

export const PostsContext = createContext()

export const PostsProvider = ({ children }) => {
  const [postsArray, setPostsArray] = useState(posts)

  const handlePosts = (postObject) => {
    setPostsArray([...postsArray, postObject])
  }
  return (
    <PostsContext.Provider value={{ postsArray, handlePosts }}>
      {children}
    </PostsContext.Provider>
  )
}
