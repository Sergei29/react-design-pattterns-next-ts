// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { getAllUsers } from "../../../src/db/users"

type Data = {
  users: Record<string, any>[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const users = await getAllUsers()
  res.status(200).json({ users })
}
