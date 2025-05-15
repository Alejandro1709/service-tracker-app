import ServiceCard from './ServiceCard'
import type { IService } from '../../types/service'
import { useSearchParams } from 'react-router-dom'
import { useServiceStore } from '../../stores/serviceStore'

type ServicesListProps = {
  services: IService[]
}

function ServicesList({ services }: ServicesListProps) {
  const [, setSearchParams] = useSearchParams()

  const setSelected = useServiceStore((state) => state.setSelected)

  const handleClick = (service: IService) => {
    setSearchParams({ service: service._id })
    setSelected(service)
  }

  return (
    <div className="flex flex-col gap-2 overflow-scroll h-full">
      {services.map((service) => (
        <ServiceCard
          key={service._id}
          service={service}
          onClick={handleClick}
        />
      ))}
    </div>
  )
}

export default ServicesList
