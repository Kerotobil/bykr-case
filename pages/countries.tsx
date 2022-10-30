import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import { country } from '../types';
import { downloadCsv } from '../helpers/export/exportCsv';
import { downloadExcel } from '../helpers/export/exportXls';
import { exportPDF } from '../helpers/export/exportPdf';
import { getCountries } from '../helpers/axios/axios-api-client';

export default function App() {
  const [data, setData] = useState<country[]>();
  const [filteredData, setFilteredData] = useState<country[]>();
  const [pageReady, setPageReady] = useState(false);
  const [groupArray, setGroupArray] = useState<string[]>();
  const [selectedRows, setSelectedRows] = useState<country[]>();

  async function getCountriesService() {
    const countryData = await getCountries();
    setData(countryData);
    return data;
  }

  function handleFilter(filterItem: string) {
    if (filterItem.length == 0) {
      setFilteredData(data);
      return;
    }

    let newData = filteredData?.filter((item) => item.name.common.toLowerCase().indexOf(filterItem) !== -1);
    setFilteredData(newData);
  }
  function handleGroup(groupItem: string) {
    if (groupItem.length == 0) {
      setFilteredData(data);
      return;
    }
    let newData = filteredData?.filter((item) => item.region.indexOf(groupItem) !== -1);
    setFilteredData(newData);
  }
  const handleSelected = (selectedRows: country[]) => {
    setSelectedRows(selectedRows);
  };

  useEffect(() => {
    getCountriesService();
    setPageReady(true);
  }, []);

  useEffect(() => {
    setFilteredData(data);

    let groupArray = data?.map((item) => item.region).filter((value, index, self) => self.indexOf(value) === index);
    setGroupArray(groupArray);
  }, [data]);

  const columns: any = useMemo(() => {
    return [
      {
        id: 1,
        name: 'Name',
        selector: (row: country) => row.name.common,
        sortable: true,
        reorder: true,
        cell: (row: country) => (
          <div contentEditable suppressContentEditableWarning={true}>
            {row.name.common}
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
            {row.population}
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
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleFilter(e.target.value)}
        />
      </div>
      <div className="ml-2">
        <label>Grupla</label>
        <select
          name="religion"
          className="border h-8 ml-2"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => handleGroup(e.target.value)}
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
            pagination={pageReady}
            paginationServer={false}
            paginationIconFirstPage
            onSelectedRowsChange={(e) => handleSelected(e.selectedRows)}
          />
        </div>
      )}
    </div>
  );
}
