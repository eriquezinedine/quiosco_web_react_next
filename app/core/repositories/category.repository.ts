import { ICategory } from '@/app/presentation/Toolbox/Interfaces/interfaces';
import { client } from '../services/pocketbase';

export const AllCategories = async () =>
    await client.pb.collection('category').getFullList<ICategory>();
