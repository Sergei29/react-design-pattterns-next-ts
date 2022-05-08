// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { getAllProducts } from "../../../src/db/products"

type Data = {
  products: Record<string, any>[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const products = await getAllProducts()
  res.status(200).json({ products })
}
