import { useState, useContext } from 'react'
import { PostsContext } from '../context/PostsContext'

export const Input = () => {
  const [newPost, setNewPost] = useState({ title: '', user: '', content: '' })

  const { postsArray, handlePosts } = useContext(PostsContext)

  const handleNewPost = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <h1>Create new post</h1>
      <form
        style={{ display: 'flex', flexDirection: 'column', width: '50%' }}
        onSubmit={(w) => {
          w.preventDefault()
          handlePosts(newPost)
        }}
      >
        <label>Title</label>
        <input
          name="title"
          value={newPost.title}
          type="text"
          style={{ border: 'gray 1px solid' }}
          onChange={handleNewPost}
        />
        <label>User</label>
        <input
          name="user"
          value={newPost.user}
          type="text"
          style={{ border: 'gray 1px solid' }}
          onChange={handleNewPost}
        />
        <label>Post content</label>
        <input
          name="content"
          value={newPost.content}
          type="text"
          style={{ border: 'gray 1px solid' }}
          onChange={handleNewPost}
        />
        <button type="submit" style={{ backgroundColor: 'lightblue' }}>
          Post
        </button>
      </form>
    </div>
  )
}
