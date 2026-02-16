import './App.css'
import Home from './pages/Landing-page'
import BlogPostPage from './pages/BlogPostPage'
import PageNotFound from './pages/PageNotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './components/auth/AuthProvider'
import { DataById } from './components/contexts/UseDataById'
import { ValidationEmail } from './components/contexts/validationEmail'
import { Toaster } from './components/ui/sonner'
import SignupPage from './pages/signup-page'
import LoginPage from './pages/login-page'
import MemberManagement from './pages/MemberManagement'
import AdminPage from './pages/AdminPage'
import AuthPage from './pages/AuthPage'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DataById>
          <ValidationEmail>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog-post/:id" element={<BlogPostPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/member" element={<MemberManagement />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/auth" element={<AuthPage />} />
            </Routes>
          </ValidationEmail>
          <Toaster />
        </DataById>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
