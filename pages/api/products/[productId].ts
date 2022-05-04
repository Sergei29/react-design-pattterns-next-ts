// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../../src/mocks';

type Data = {
  product: Record<string, any>;
};

type Err = {
  error: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Err>,
) {
  const { productId } = req.query;
  if (typeof productId !== 'string') {
    res.status(400).json({ error: 'wrong product ID' });
    return;
  }
  const intProductId = parseInt(productId, 10);
  if (isNaN(intProductId)) {
    res.status(400).json({ error: 'wrong product ID, must be a number' });
    return;
  }
  const product = products.find((current) => current.id === intProductId);

  if (!product) {
    res.status(404).json({ error: 'product not found' });
    return;
  }

  setTimeout(() => {
    res.status(200).json({ product });
  }, 700);
}
