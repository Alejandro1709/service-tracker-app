import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import Sidebar from '../components/Sidebar'
import { useServiceStore } from '../stores/serviceStore'
import { getServices } from '../services/services'

function HomePage() {
  const setServices = useServiceStore((state) => state.setServices)

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
        <Sidebar />

        <main className="bg-white flex-1 p-4 rounded">
          <div className="">{selected?.name}</div>
        </main>
      </div>
      <ToastContainer position="top-right" />
    </div>
  )
}

export default HomePage
