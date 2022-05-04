// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../../src/mocks';

type Data = {
  products: Record<string, any>[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  setTimeout(() => {
    res.status(200).json({ products });
  }, 700);
}
