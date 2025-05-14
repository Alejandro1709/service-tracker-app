import type { IService } from '../../types/service'

type ServiceCardProps = {
  service: IService
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="border p-2 rounded bg-white border-[#E7E7E7]">
      <h2 className="text-lg text-[#3F2CAC] font-semibold">{service.name}</h2>
      <p className="text-sm text-[#B0B0B0]">{service.description}</p>
    </article>
  )
}

export default ServiceCard
