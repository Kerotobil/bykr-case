import * as XLSX from 'xlsx';
import { country } from '../../types';

export const downloadCsv = (exportData: country[]) => {
  const worksheet = XLSX.utils.json_to_sheet(exportData);
  var csv = XLSX.utils.sheet_to_csv(worksheet, { strip: true });
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, 'DataSheet.csv');
};
