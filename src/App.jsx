import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { PostDetail } from './pages/PostDetail'
import { InputPage } from './pages/InputPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:postId" element={<PostDetail />} />
        <Route path="/newPost" element={<InputPage />} />
      </Routes>
    </>
  )
}

export default App
