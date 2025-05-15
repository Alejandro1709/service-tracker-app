import ServiceCard from './ServiceCard'
import type { IService } from '../../types/service'

type ServicesListProps = {
  services: IService[]
}

function ServicesList({ services }: ServicesListProps) {
  return (
    <div className="flex flex-col gap-2 overflow-scroll h-full">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service} />
      ))}
    </div>
  )
}

export default ServicesList
