import { SubmitHandler, useForm } from 'react-hook-form'
import { Product } from '../../common/Product'

type Props = {
  onAdd: (product: Product) => void
}

const ProductAdd = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Product>()

  const onSubmit: SubmitHandler<Product> = (data: Product) => {
    props.onAdd(data)
  }
  return (
    <div>
      <h1>Add Product</h1>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label htmlFor='title'>Ten san pham</label>
          <input
            type='text'
            className='form-control'
            id='title'
            placeholder='Ten san pham...'
            {...register('title', { required: true })}
          />
          {errors.title && <span className='text-danger'>This field is required</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Gia san pham</label>
          <input
            type='text'
            className='form-control'
            id='price'
            placeholder='Gia san pham...'
            {...register('price', { required: true })}
          />
          {errors.price && <span className='text-danger'>This field is required</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Mo ta san pham</label>
          <input
            type='text'
            className='form-control'
            id='description'
            placeholder='Mo ta san pham...'
            {...register('description')}
          />
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          Add product
        </button>
      </form>
    </div>
  )
}

export default ProductAdd
