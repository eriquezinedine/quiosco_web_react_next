import { IProduct } from '@/app/presentation/Toolbox/Interfaces/interfaces';
import { client } from '../services/pocketbase';

export const AllProducts = async () =>
    await client.pb.collection('product').getFullList<IProduct>();
