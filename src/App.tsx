import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage'
import DirectHirePage from './pages/DirectHirePage'
import TalentOnDemandPage from './pages/TalentOnDemandPage'
import RolesPage from './pages/RolesPage'
import PricingPage from './pages/PricingPage'
import HiringPHPage from './pages/HiringPHPage'
import SavingsPage from './pages/SavingsPage'
import FindJobPage from './pages/FindJobPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/direct-hire" element={<DirectHirePage />} />
        <Route path="/talent-on-demand" element={<TalentOnDemandPage />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/hiring-philippines" element={<HiringPHPage />} />
        <Route path="/savings" element={<SavingsPage />} />
        <Route path="/find-a-job" element={<FindJobPage />} />
      </Route>
    </Routes>
  )
}
