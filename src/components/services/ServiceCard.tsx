import type { IService } from '../../types/service'

type ServiceCardProps = {
  service: IService
  onClick: (service: IService) => void
}

function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <article
      className="border p-2 rounded bg-white border-[#E7E7E7] cursor-pointer hover:border-[#3F2CAC]"
      onClick={() => onClick(service)}
    >
      <h2 className="text-lg text-[#3F2CAC] font-semibold">{service.name}</h2>
      <p className="text-sm text-[#B0B0B0]">{service.description}</p>
    </article>
  )
}

export default ServiceCard
