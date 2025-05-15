import EditServiceForm from '../components/forms/EditServiceForm'

function EditServicePage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-medium">Edit service</h1>

      <EditServiceForm />
    </div>
  )
}

export default EditServicePage
