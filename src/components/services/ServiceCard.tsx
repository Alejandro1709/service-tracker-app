import { Link } from 'react-router-dom'
import type { IService } from '../../types/service'

type ServiceCardProps = {
  service: IService
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link to={`/services/${service._id}`}>
      <article className="border p-2 rounded bg-white border-[#E7E7E7] cursor-pointer hover:border-[#3F2CAC]">
        <h2 className="text-lg text-[#3F2CAC] font-semibold">{service.name}</h2>
        <p className="text-sm text-[#B0B0B0]">{service.description}</p>
      </article>
    </Link>
  )
}

export default ServiceCard
