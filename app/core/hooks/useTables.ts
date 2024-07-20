import { useQuery } from '@tanstack/react-query';
import { AllTables } from '../repositories/table.repository';
import { ITable } from '../models/table';

export const useTables = () => {
  return useQuery({
    queryKey: ['tables'],
    queryFn: async (): Promise<ITable[]> => {
      return await AllTables();
    },
  });
};
