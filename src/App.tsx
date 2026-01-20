import './App.css'
import Home from './page/Landing-page'
import BlogPostPage from './page/BlogPostPage'
import PageNotFound from './page/PageNotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DataById } from './components/context/UseDataById'
import { Toaster } from './components/ui/sonner'

function App() {
  return (
    <DataById>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog-post/:id" element={<BlogPostPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </DataById>
  )
}

export default App
