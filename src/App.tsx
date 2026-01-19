import './App.css'
import Home from './page/Landing-page'
import BlogPostPage from './page/BlogPostPage'
import PageNotFound from './page/PageNotFound'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-post/:id" element={<BlogPostPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
