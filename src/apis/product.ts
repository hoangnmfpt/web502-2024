import instance from '.'

export const createProduct = async (product: Product) => {
  try {
    const { data } = await instance.post('/products', product)
    return data
  } catch (error) {
    console.log(error)
  }
}
