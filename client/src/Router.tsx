import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Fines } from './pages/Fines'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/fines" element={<Fines />} />
    </Routes>
  )
}
