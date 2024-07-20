import { useQuery } from '@tanstack/react-query';
import { AllCategories } from '../repositories/category.repository';
import { ICategory } from '@/app/presentation/Toolbox/Interfaces/interfaces';

export const useCategory = () => {
  return useQuery({
    queryKey: ['category'],
    queryFn: async (): Promise<ICategory[]> => {
      return await AllCategories();
    },
  });
};
