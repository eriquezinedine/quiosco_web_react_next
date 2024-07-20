import { useQuery } from '@tanstack/react-query';
import { AllProducts } from '../repositories/product.repository';
import { IProduct } from '@/app/presentation/Toolbox/Interfaces/interfaces';

export const useProduct = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async (): Promise<IProduct[]> => {
      return await AllProducts();
    },
  });
};
