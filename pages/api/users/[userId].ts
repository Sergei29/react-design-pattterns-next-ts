// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { getUserById } from "../../../src/db/users"
type Data = {
  user: Record<string, any>
}
type Err = {
  error: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Err>
) {
  const { userId } = req.query
  if (typeof userId !== "string") {
    res.status(400).json({ error: "wrong user ID" })
    return
  }
  const intUserId = parseInt(userId, 10)
  if (isNaN(intUserId)) {
    res.status(400).json({ error: "wrong user ID, must be a number" })
    return
  }
  const user = await getUserById(intUserId)

  if (!user) {
    res.status(404).json({ error: "user not found" })
    return
  }

  res.status(200).json({ user })
}
