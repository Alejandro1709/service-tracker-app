import ServicesList from './services/ServicesList'

function Sidebar() {
  return (
    <>
      <aside className="bg-white hidden lg:block lg:w-80 p-4 lg:rounded-md">
        {/* <div className="bg-green-400">Searchbar</div> */}
        <ServicesList />
      </aside>

      <div className="block lg:hidden bg-white p-4 border-b border-[#E7E7E7]">
        <select className="border border-[#E7E7E7] bg-white w-full">
          <option value="">Select a service</option>
        </select>
      </div>
    </>
  )
}

export default Sidebar
