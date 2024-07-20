import { ITable } from '../models/table';
import { client } from '../services/pocketbase';

export const AllTables = async () =>
  await client.pb.collection('table').getFullList<ITable>();
export const FilterTables = async () =>
  await client.pb.collection('table').getFirstListItem('JORGEEEEEEE CABROOOOO');
