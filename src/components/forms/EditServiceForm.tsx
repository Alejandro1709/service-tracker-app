import { useForm } from 'react-hook-form'
import type { EditServiceType } from '../../types/service'
import { useServiceStore } from '../../stores/serviceStore'
import { useNavigate, useParams } from 'react-router-dom'
import { updateService } from '../../services/services'
import { toast } from 'react-toastify'

function EditServiceForm() {
  const { slug } = useParams()

  const services = useServiceStore((state) => state.services)
  const setServices = useServiceStore((state) => state.setServices)

  const service = services.find((s) => s.slug === slug)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditServiceType>({
    defaultValues: {
      name: service?.name,
      description: service?.description,
    },
  })

  const navigate = useNavigate()

  const handleEditService = (formData: EditServiceType) => {
    if (!slug) return

    updateService(slug, formData)
      .then((data) => {
        const updated = services.map((s) =>
          s.slug === slug ? { ...data.service } : { ...s }
        )

        setServices(updated)

        reset()

        toast.success('Service updated!')

        navigate(`/services/${data.service._id}`)
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit(handleEditService)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name:</label>
        <input
          className="p-2 border"
          id="name"
          type="text"
          placeholder="Luz Del Sur"
          {...register('name', {
            required: 'A service must have a name',
          })}
        />
        {errors.name ? (
          <p className="text-red-400">{errors.name.message}</p>
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description">Description:</label>
        <input
          className="p-2 border"
          id="description"
          type="text"
          placeholder="Servicio de luz"
          {...register('description')}
        />
        {errors.description ? (
          <p className="text-red-400">{errors.description.message}</p>
        ) : null}
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
          Update Service
        </button>
      </div>
    </form>
  )
}

export default EditServiceForm
