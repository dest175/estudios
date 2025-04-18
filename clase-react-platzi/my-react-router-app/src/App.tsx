import React ,{Suspense} from 'react'
import { Route,Routes, Link } from 'react-router-dom'
import Product from "./components/Product"
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Settings from './components/Settings'
import Overview from './components/Overview'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './components/Profile'
import NotFound from './components/NotFound'

function App() {

  return (
    <div>
      <nav>
       <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>

        </li>
        <li>
          <Link to="/dashboard"> DASHBOARD</Link>
        </li>
       </ul>
      </nav>
       <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/about" element={<About />}></Route>
       <Route path="/product/:id" element={<Product/>}></Route>
       <Route path="dashboard/*" element={<Dashboard/>}>
        <Route path="overview" element={<Overview/>}></Route>
        <Route path="settings" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Settings/>
          </Suspense>
          }>
          </Route>
        </Route>
        <Route path="/profile" element={
          <ProtectedRoute isAuthenticate={true}>
            <Profile />
          </ProtectedRoute>
        }>
        </Route> 
        <Route path="*" element={<NotFound />}></Route>
       </Routes>
    </div>
  )
}



function About() {
  return <h2>About</h2>
}

export default App

