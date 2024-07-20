import { create } from 'zustand';
import { ICategory, IProduct } from '../Toolbox/Interfaces/interfaces';
import { PocketBaseClient } from '@/app/core/services/pocketbase';
import { useCategory } from '@/app/core/hooks/useCategory';
import { useProduct } from '@/app/core/hooks/useProduct';
import { AllTables } from '@/app/core/repositories/table.repository';
import { AllCategories } from '@/app/core/repositories/category.repository';
import { AllProducts } from '@/app/core/repositories/product.repository';

export enum StatusMenu {
  Initial,
  Loading,
  Loaded,
  Error,
}

interface MenuState {
  status: StatusMenu;
  categories: ICategory[];
  products: IProduct[];
  menu: Map<string, IProduct[]>;
  getAll: () => Promise<void>;
  cleanStore: () => void;
}

export const useMenuStore = create<MenuState>((set, get) => ({
  status: StatusMenu.Initial,
  menu: new Map(),
  categories: [],
  products: [],
  getAll: async () => {
    set((state) => ({ ...state, status: StatusMenu.Loading }));
    try {
      let categories =  await AllCategories();
      let products =  await AllProducts();

      const menu: Map<string, IProduct[]> = new Map();
      for (let index = 0; index < products.length; index++) {
        const element = products[index];
        const hasCategory: boolean = menu.has(products[index].id_category);
        if (hasCategory) {
          const listProducts = menu.get(element.id_category) as IProduct[];
          menu.set(element.id_category, [...listProducts, element]);
        } else {
          menu.set(element.id_category, [element]);
        }
      }
      const allCategory: ICategory = {
        collectionId: '9999',
        collectionName: 'n',
        created: '',
        id: 'Todos',
        name: 'Todos',
        updated: '',
      };

      menu.set('Todos', products);

      set((state) => ({
        ...state,
        categories: [allCategory, ...categories],
        products: products,
        status: StatusMenu.Loaded,
        menu: menu,
      }));
      console.log('PINEDA GAY', categories, products);
    } catch (error) {
      console.log('PINEDA GAY ERROR',error);

      set((state) => ({ ...state, status: StatusMenu.Error }));
    }
  },
  cleanStore: () => set({}, true),
}));
