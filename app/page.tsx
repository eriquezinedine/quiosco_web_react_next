'use client';
import { useEffect } from 'react';
import { Layout } from './presentation/Home';
import SectionBanner from './presentation/components/SectionBanner';
import SectionCategory from './presentation/components/SectionCategory';
import SectionProducts from './presentation/components/SectionProducts';
import { useMenuStore } from './presentation/stores/menuStorage';
import ShoppingButton from './presentation/components/ShoppingButton';
import DialogSectionShopping from './presentation/components/Dialogs/DialogSectionShopping';
import SectionHeader from './presentation/components/SectionHeader';
import { useSearchParams } from 'next/navigation';
import { useTableStorage } from './presentation/stores/tableStorage';
import { ITable } from './presentation/Toolbox/Interfaces/interfaces';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTables } from './core';
import { PocketBaseClient } from './core/services/pocketbase';
// import { PocketBaseClient } from './core/services/pocketbase';

export default function Home() {
  const getAll = useMenuStore().getAll;

  const selectedTable = useTableStorage().selectedTable;
  const searchParams = useSearchParams();

  const selectionTable = (tables: ITable[]) => {
    const idTable = searchParams.get('mesa');
    const table = tables.find((table) => table.id.toString() === idTable);
    if (table == undefined) return;
    selectedTable(table);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <main>
      <Layout>
        <SectionHeader />
        <SectionBanner />
        <SectionCategory />
        <SectionProducts />
      </Layout>
      <ShoppingButton />
      <DialogSectionShopping />
      <ToastContainer />
    </main>
  );
}
