// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { usersOther as users } from '../../../src/mocks';

type Data = {
  users: Record<string, any>[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  setTimeout(() => {
    res.status(200).json({ users });
  }, 700);
}
