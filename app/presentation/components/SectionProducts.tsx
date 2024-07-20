'use client'
import ProductWidget from './ProductWidget'
import { StatusMenu, useMenuStore } from '../stores/menuStorage';
import { useUiStore } from '../stores/uiStorage';
import SkeletonProduct from './skeleton/SkeletonProduct';
import Empty from '../Toolbox/utils/empty/Empty';

export default function SectionProducts() {
  const menu = useMenuStore().menu;
  const products = useMenuStore().products;
  const category = useUiStore().category;
  const status = useMenuStore().status;

  const data = menu.get(category) ?? [];

  const length = 12;
  const listSkeleton = Array.from({ length }, (_, __) => {});

  return (
    <div className= { data.length === 0 && status == StatusMenu.Loaded ? "": "grid grid-cols-2 md:grid-cols-3  xl:grid-cols-5 gap-4 mb-6"}>
        { status != StatusMenu.Loaded? listSkeleton?.map((__, index) => (
            < SkeletonProduct key={index}  />
         )) : data.length === 0 ? <Empty /> : data?.map((option, index) => (
          < ProductWidget key={index} product={option}/>
         ))
        }
    </div>
  )
}
