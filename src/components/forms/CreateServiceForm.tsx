function CreateServiceForm() {
  return (
    <form className="flex flex-col gap-2" onSubmit={() => {}}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name:</label>
        <input
          className="p-2 border"
          id="name"
          type="text"
          placeholder="Luz Del Sur"
        />
        <p>Error will be here</p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description">Description:</label>
        <input
          className="p-2 border"
          id="description"
          type="text"
          placeholder="Servicio de luz"
        />
        <p>Error will be here</p>
      </div>
      <div className="flex flex-row gap-2 mt-4">
        <button
          className="p-2 rounded cursor-pointer border border-[#3F2CAC] text-[#3F2CAC] font-medium hover:bg-[#3F2CAC] hover:text-white transition-all"
          type="button"
        >
          Save Local
        </button>
        <button
          className="p-2 rounded cursor-pointer bg-[#3F2CAC] text-white font-medium hover:bg-[#3f2cacdf] transition-all"
          type="submit"
        >
          Create Service
        </button>
      </div>
    </form>
  )
}

export default CreateServiceForm
