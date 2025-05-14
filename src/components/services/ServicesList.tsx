import ServiceCard from './ServiceCard'

function ServicesList() {
  return (
    <div className="flex flex-col gap-2 overflow-scroll h-full">
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  )
}

export default ServicesList
