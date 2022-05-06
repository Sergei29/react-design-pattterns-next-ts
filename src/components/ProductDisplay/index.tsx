import React from "react"
import { Product } from "../../types"
type Data = {
  product?: Product | Record<string, any>
}

type NestedData = {
  product?: {
    product: Product | Record<string, any>
  }
}

type Props = Data | NestedData

const ProductDisplay = ({ product }: Props): JSX.Element | null => {
  if (!product) return null
  const { name, id, description, price, rating } =
    (product as NestedData).product || product
  return (
    <div style={{ textAlign: "center" }}>
      <h3>{name}</h3>
      <p>Price: $ {price}</p>
      <p>{description}</p>
      <p>ID: {id}</p>
      <p>Latest rating: {rating}</p>
    </div>
  )
}

export default ProductDisplay
