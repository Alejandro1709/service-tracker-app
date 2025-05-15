import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import { getServices } from './services/services'
import { toast, ToastContainer } from 'react-toastify'
import { useServiceStore } from './stores/serviceStore'

function App() {
  const [services, setServices] = useState([])

  const selected = useServiceStore((state) => state.selected)

  useEffect(() => {
    getServices()
      .then((data) => {
        setServices(data.services)
      })
      .catch((err) => {
        console.log(err)
        toast.error(err.message, {
          toastId: 'super-id-3',
        })
      })
  }, [])

  return (
    <div className="flex flex-col lg:justify-center lg:items-center min-h-screen bg-[#F5F7FD]">
      <div className="flex flex-col lg:flex-row lg:gap-4 lg:p-4 lg:h-[679px] lg:w-2/4">
        <Sidebar services={services} />

        <main className="bg-white flex-1 p-4 rounded">
          <div className="">{selected?.name}</div>
        </main>
      </div>
      <ToastContainer position="top-right" />
    </div>
  )
}

export default App
