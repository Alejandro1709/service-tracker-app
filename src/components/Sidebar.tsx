import { Link, useParams } from 'react-router-dom'
import { useServiceStore } from '../stores/serviceStore'
import ServicesList from './services/ServicesList'

function Sidebar() {
  const { slug } = useParams()

  const services = useServiceStore((state) => state.services)

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

          <button className="border py-1 px-2 bg-white text-[#3F2CAC] font-medium rounded cursor-pointer hover:opacity-80 border-[#E7E7E7]">
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
