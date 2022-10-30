import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { country } from '../../types';

export const exportPDF = (exportData: country[]) => {
  const doc = new jsPDF();
  const bodyArray = exportData?.map((item) => {
    return [item.name.common, item.region, item.capital, item.population];
  });

  autoTable(doc, { html: '#my-table' });

  autoTable(doc, {
    head: [['Name', 'Region', 'Capital', 'Population']],
    body: bodyArray,
  });
  doc.save('table.pdf');
};
