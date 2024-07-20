'use client';
import React, { useEffect, useState } from 'react';
import { SiFoodpanda } from 'react-icons/si';
import { FaShoppingBasket } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { StatusTable, useTableStorage } from '../stores/tableStorage';
import SkeletonTable from './skeleton/SkeletonTable';
import { DialogSelectionTable } from './Dialogs';
import { useTables } from '@/app/core';

const SectionHeader = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { setTables, table } = useTableStorage();
  const { data: tables, isLoading, isError, isSuccess } = useTables();

  useEffect(() => {
    setTables(tables!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <div>
      <section className='flex pt-4 items-center justify-between'>
        <SiFoodpanda size={28} />
        {!isLoading ? (
          <div
            onClick={() => {
              setOpen(true);
            }}
            className='bg-slate-700 py-2 text-white rounded-lg cursor-pointer text-center'
            style={{ width: '182px' }}
          >
            <span>
              {table != null
                ? `Mesa N° ${table.number}`
                : 'Seleccionar una mesa'}
            </span>
          </div>
        ) : (
          <SkeletonTable />
        )}
        {open && (
          <DialogSelectionTable
            onClosed={() => {
              setOpen(false);
            }}
          />
        )}
      </section>
    </div>
  );
};

export default SectionHeader;
