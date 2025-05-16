function ServicePage() {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-2xl font-medium">Service Name</h2>

          <ul className="flex flex-row gap-4">
            <li>
              <button>Add Entry</button>
            </li>
            <li>
              <button>Edit Entry</button>
            </li>
            <li>
              <button>Delete Entry</button>
            </li>
          </ul>
        </div>

        <select className="p-2 border bg-white border-[#E7E7E7] rounded">
          <option value="">Select an entry</option>
        </select>
      </header>

      <div className="flex flex-col">
        <div className="flex flex-col gap-2 text-white justify-center items-center h-40 bg-[#3F2CAC] rounded">
          <h2 className="text-4xl font-medium">#456554</h2>
          <p>2do recibo de Luz Del Sur</p>
        </div>
      </div>
    </section>
  )
}

export default ServicePage
