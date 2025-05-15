import CreateServiceForm from '../components/forms/CreateServiceForm'

function NewServicePage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-medium">Add a new service</h1>

      <CreateServiceForm />
    </div>
  )
}

export default NewServicePage
