import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import * as XLSX from 'xlsx';
interface country {
  area: number;
  borders: string[];
  capital: string[];
  cca3: string;
  fifa: string;
  flag: string;
  independent: boolean;
  maps: { googleMaps: string };
  name: { common: string; official: string };
  population: number;
  region: string;
  subregion: string;
}

export default function App() {
  const [data, setData] = useState<country[]>();
  const [filteredData, setFilteredData] = useState<country[]>();
  const [pageReady, setPageReady] = useState(false);
  const [groupArray, setGroupArray] = useState<string[]>();
  const [selectedRows, setSelectedRows] = useState<country[]>();

  const downloadExcel = (exportData: country[]) => {
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'DataSheet.xlsx');
  };
  const downloadCsv = (exportData: country[]) => {
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    var csv = XLSX.utils.sheet_to_csv(worksheet, { strip: true });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'DataSheet.csv');
  };

  async function getCountries() {
    const countryData = (await axios.get('https://restcountries.com/v3.1/all')).data as country[];
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
    getCountries();
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
            Export
          </button>
          <button
            onClick={() => {
              downloadCsv(selectedRows);
            }}
          >
            Export
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
