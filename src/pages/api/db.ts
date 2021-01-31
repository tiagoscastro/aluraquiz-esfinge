import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../db.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  );

  return res.json(db);
};
