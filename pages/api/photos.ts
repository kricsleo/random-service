// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetchUnspash } from '@/utils'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  key?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = await fetchUnspash('/photos')
  res.status(200).json(result)
}