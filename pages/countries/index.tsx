import { ChangeEvent, FocusEvent, useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import { country } from '../../types';
import { downloadCsv } from '../../helpers/export/exportCsv';
import { downloadExcel } from '../../helpers/export/exportXls';
import { exportPDF } from '../../helpers/export/exportPdf';
import { getCountries } from '../../helpers/axios/axios-api-client';
import { EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function App() {
  const [data, setData] = useState<country[]>();
  const [filteredData, setFilteredData] = useState<country[]>();
  const [filterWord, setFilterWord] = useState<string>();
  const [groupArray, setGroupArray] = useState<string[]>();
  const [selectedRows, setSelectedRows] = useState<country[]>();
  const [groupWord, setGroupWord] = useState<string>();
  const router = useRouter();

  async function getCountriesService() {
    const countryData = await getCountries();
    setData(countryData);
    return data;
  }

  function filter() {
    let newData = data;

    if (groupWord != null && groupWord != 'all') {
      newData = newData?.filter((item) => item.region.indexOf(groupWord) !== -1);
    }
    if (filterWord != null) {
      newData = newData?.filter((item) => item.name.common.toLowerCase().indexOf(filterWord) !== -1);
    }
    setFilteredData(newData);
  }

  const handleSelected = (selectedRows: country[]) => {
    setSelectedRows(selectedRows);
  };
  const handleEdit = (selectedRow: country, newTitle: string) => {
    let newData = data;
    const itemIndex = data?.findIndex((e) => e.cca3 == selectedRow.cca3);
    if (itemIndex && newData) {
      newData[itemIndex].name.common = newTitle;
      setData(data?.map((item) => (item.cca3 === selectedRow.cca3 ? { ...selectedRow } : item)));
      setData([...newData]);
    }
  };

  useEffect(() => {
    getCountriesService();
  }, []);

  useEffect(() => {
    setFilteredData(data);

    let groupArray = data?.map((item) => item.region).filter((value, index, self) => self.indexOf(value) === index);
    setGroupArray(groupArray);
  }, [data]);

  useEffect(() => {
    filter();
  }, [groupWord, filterWord, data]);

  const columns: any = useMemo(() => {
    return [
      {
        id: 1,
        name: 'Name',
        selector: (row: country) => row.name.common,
        sortable: true,
        reorder: true,
        cell: (row: country) => (
          <div className="flex space-x-1">
            <Link href={`/countries/${row.name.common}`}>
              <EyeIcon className="w-5 h-4 text-gray-400" />
            </Link>
            <div
              contentEditable
              suppressContentEditableWarning={true}
              onBlur={(e: FocusEvent<HTMLDivElement, Element>) => handleEdit(row, e.target.innerText)}
            >
              {row.name.common}
            </div>
          </div>
        ),
      },
      {
        id: 2,
        name: 'Capital',
        selector: (row: country) => row.capital,
        reorder: true,
        cell: (row: country) => (
          <div contentEditable suppressContentEditableWarning={true}>
            {row.capital && row.capital.length > 0 ? row.capital[0] : ''}
          </div>
        ),
      },
      {
        id: 3,
        name: 'Flag',
        selector: (row: country) => row.flag,
        reorder: true,
        cell: (row: country) => <div>{row.flag}</div>,
      },
      {
        id: 4,
        name: 'Region',
        selector: (row: country) => row.region,
        right: true,
        reorder: true,
        cell: (row: country) => (
          <div contentEditable suppressContentEditableWarning={true}>
            {row.region}
          </div>
        ),
      },
      {
        id: 5,
        name: 'Population',
        selector: (row: country) => row.population,
        sortable: true,
        right: true,
        reorder: true,
        cell: (row: country) => (
          <div contentEditable suppressContentEditableWarning={true}>
            {row.population.toLocaleString('en-US')}
          </div>
        ),
      },
    ];
  }, [data]);

  return (
    <div className="App max-w-7xl mx-auto">
      <div className="m-2">
        <label>Ara</label>
        <input
          type="text"
          className="border border-black rounded-md"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFilterWord(e.target.value)}
        />
      </div>
      <div className="ml-2">
        <label>Grupla</label>
        <select
          name="religion"
          className="border h-8 ml-2"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setGroupWord(e.target.value)}
        >
          <option key={'defaullt'} value={'all'}>
            {'All'}
          </option>
          {groupArray?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {selectedRows && selectedRows?.length > 0 ? (
        <div>
          <button
            onClick={() => {
              downloadExcel(selectedRows);
            }}
          >
            Export XLS
          </button>
          <button
            onClick={() => {
              downloadCsv(selectedRows);
            }}
          >
            Export CSV
          </button>
          <button
            onClick={() => {
              exportPDF(selectedRows);
            }}
          >
            Export PDF
          </button>
        </div>
      ) : (
        ''
      )}
      {filteredData && columns && (
        <div>
          <DataTable
            title="Countries"
            columns={columns}
            data={filteredData}
            defaultSortFieldId={1}
            selectableRows
            pagination={router.isReady}
            paginationServer={false}
            paginationIconFirstPage
            onSelectedRowsChange={(e) => handleSelected(e.selectedRows)}
          />
        </div>
      )}
    </div>
  );
}
