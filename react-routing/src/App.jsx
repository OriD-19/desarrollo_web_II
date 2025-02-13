import React from 'react'
import { Link, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import AboutUsPage from './pages/AboutUsPage'
import TeamPage from './pages/TeamPage'
import CreateUser from './pages/CreateUser'
import EditUser from './pages/EditUser'
import NavBar from './components/NavBar'

const App = () => {
    return (
        <div>
            <h1>Demo Routing</h1>
            <NavBar />
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />}>
                    <Route index element={<AboutUsPage />} />
                    <Route path="team" element={<TeamPage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path='user'>
                    <Route path='create/' element={<CreateUser />}/>
                    <Route path='edit/:userId' element={<EditUser />}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App