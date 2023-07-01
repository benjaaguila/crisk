import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import LandingPage from './pages/LandingPage/LandingPage'
import RulesPage from './pages/RulesPage/RulesPage'
import IndexPage from './pages/IndexPage/IndexPage'
import Layout from './pages/Layout'
import Card from './pages/AboutPage/Card'
import GamePage from './pages/GamePage/GamePage'
import UserGamesPage from './pages/UserGamesPage/UserGamesPage'
import Login from './components/Login/Login'
import UserCheck from './components/protected/UserCheck'
import AdminCheck from './components/protected/AdminCheck'
import LogoutButton from './components/Login/Logout'
import SingUp from './components/SingUp/SingUp'


function Router(){
  return (
    <BrowserRouter>
      <div className='main-content'>
      <Layout />
      <Routes>
        <Route path={"/"} element={<LandingPage/>}/>
        <Route path={"/rules"} element={<RulesPage/>}/>
        <Route path={"/index"} element={<IndexPage/>}/>
        <Route path={"/about"} element={<Card/>}/>
        <Route path={"/users/:userId/games/:gameId"} element={<GamePage />}/>
        <Route path={"/users/:userId/games"} element={<UserGamesPage />}/>
        <Route path={"/login"} element={<Login />}/>
        <Route path={"/usercheck"} element={<UserCheck />}/>
        <Route path={"/admincheck"} element={<AdminCheck />}/>
        <Route path={"/logout"} element={<LogoutButton />}/>
        <Route path={"/singup"} element={<SingUp />}/>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Router;