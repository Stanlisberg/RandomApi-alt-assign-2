import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from './components/pages/Profile'
import Users from './components/pages/Users'
import Home from './components/pages/Home'
import Error from './components/pages/Error'
import Navbar from "./components/layouts/Navbar"
import SignIn from './components/pages/SignIn'
import { ApiProvider } from './components/context/ApiContext'
import ErrorTesting from './components/pages/ErrorTesting'
import Footer from './components/layouts/Footer'
import NestedRoute from './components/pages/NestedRoute'
import ErrorBoundary from './components/pages/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
    <ApiProvider>
      <Router>
       <div className="app">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/*' element={<Error />} />
            <Route path='/profile' element={<Profile />} >
             <Route path='/profile' element={<SignIn />} />
            </Route>
            <Route path='/users' element={<Users />} />
            <Route path='/nested' element={<NestedRoute />} />
          </Routes>
          <ErrorTesting testing='blue' />
       <Footer />
     </div>
     </Router>
    </ApiProvider>
    </ErrorBoundary >
  )
}

export default App
