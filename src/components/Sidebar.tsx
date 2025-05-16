import { Link, useNavigate, useParams } from 'react-router-dom'
import { useServiceStore } from '../stores/serviceStore'
import ServicesList from './services/ServicesList'
import { deleteService } from '../services/services'
import { toast } from 'react-toastify'

function Sidebar() {
  const { slug } = useParams()

  const services = useServiceStore((state) => state.services)
  const setServices = useServiceStore((state) => state.setServices)

  const navigate = useNavigate()

  const handleDeleteService = (slug: string | undefined) => {
    const confirmation = confirm('Are you sure?')

    const filtered = services.filter((s) => s.slug !== slug)

    if (confirmation) {
      if (!slug) return

      deleteService(slug)
        .then((data) => {
          console.log(data)
          setServices(filtered)

          toast.success('Service removed!')

          navigate('/')
        })
        .catch((err) => {
          toast.error(err.message)
        })
    }
  }

  return (
    <>
      <aside className="bg-white hidden lg:flex flex-col gap-4 lg:w-80 p-4 lg:rounded-md">
        <div className="flex gap-2">
          <Link
            to={'/services/new'}
            className="border py-1 px-2 bg-white text-[#3F2CAC] font-medium rounded cursor-pointer hover:opacity-80 border-[#E7E7E7]"
          >
            Add
          </Link>

          <Link
            to={`/services/${slug}/edit`}
            className="border py-1 px-2 bg-white text-[#3F2CAC] font-medium rounded cursor-pointer hover:opacity-80 border-[#E7E7E7]"
          >
            Edit
          </Link>

          <button
            className="border py-1 px-2 bg-white text-[#3F2CAC] font-medium rounded cursor-pointer hover:opacity-80 border-[#E7E7E7]"
            onClick={() => handleDeleteService(slug)}
          >
            Delete
          </button>
        </div>

        <ServicesList services={services} />
      </aside>

      <div className="block lg:hidden bg-white p-4 border-b border-[#E7E7E7]">
        <select className="border border-[#E7E7E7] bg-white w-full">
          <option value="" defaultChecked>
            Select a service
          </option>
          {services.map((service) => (
            <option value={service._id} key={service._id}>
              {service.name}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default Sidebar
