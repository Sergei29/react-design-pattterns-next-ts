import { Product } from "../types"
import { db, resolveData } from "."

const PATH_TO_PRODUCTS = "/products"

export const getAllProducts = (): Promise<Product[]> =>
  resolveData(db.getData(PATH_TO_PRODUCTS))

export const saveProducts = (products: Product[]) => {
  db.push(PATH_TO_PRODUCTS, products)
  db.reload()
}

export const getProductById = async (id: number) => {
  const products = await getAllProducts()
  return products.find((product) => product.id === id) || null
}

export const addNewProduct = async (newProduct: Product) => {
  const currentProducts = await getAllProducts()
  const updatedProducts = [...currentProducts, newProduct]
  saveProducts(updatedProducts)
  return newProduct
}

export const deleteProductById = async (id: number) => {
  const productToDelete = await getProductById(id)
  if (!productToDelete) {
    return null
  }
  const products = await getAllProducts()
  const newProductsList = products.filter((product) => product.id !== id)
  saveProducts(newProductsList)
  return id
}

export const updateProduct = async (
  updatedProduct: Product
): Promise<Product | null> => {
  let response: Product | null = null

  const products = await getAllProducts()
  const newProductsList = products.map((currentProduct) => {
    if (currentProduct.id === updatedProduct.id) {
      const { id, ...restCurrentProduct } = currentProduct
      const { id: incomingId, ...restUpdatedProduct } = updatedProduct
      const newProduct = { id, ...restCurrentProduct, ...restUpdatedProduct }
      response = { ...newProduct }
      return newProduct
    }
    return currentProduct
  })

  saveProducts(newProductsList)

  return response
}
