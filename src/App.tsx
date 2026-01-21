import './App.css'
import Home from './page/Landing-page'
import BlogPostPage from './page/BlogPostPage'
import PageNotFound from './page/PageNotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DataById } from './components/context/UseDataById'
import { ValidationEmail } from './components/context/validationEmail'
import { Toaster } from './components/ui/sonner'
import SignupPage from './page/signup-page'
import LoginPage from './page/login-page'
import MemberManagement from './page/MemberManagement'

function App() {
  return (
    <DataById>
      <ValidationEmail>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog-post/:id" element={<BlogPostPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/member" element={<MemberManagement />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </ValidationEmail>
    </DataById>
  )
}

export default App
