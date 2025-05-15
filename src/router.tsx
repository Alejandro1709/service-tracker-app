import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import ServicePage from './pages/ServicePage'
import NewServicePage from './pages/NewServicePage'
import EditServicePage from './pages/EditServicePage'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/services/new" element={<NewServicePage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/services/:slug/edit" element={<EditServicePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
