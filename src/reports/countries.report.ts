import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from './sections/header.section';

export const getCountryReport = (): TDocumentDefinitions => {
  return {
    pageOrientation: 'landscape',
    header: headerSection({
      title: 'Countries Report',
      subTitle: 'List of countries',
    }),
    pageMargins: [40, 110, 40, 60],
    content: [
      {
        layout: 'lightHorizontalLines', // optional
        table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
          widths: ['*', 'auto', 100, '*'],

          body: [
            ['First', 'Second', 'Third', 'The last one'],
            ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
            [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4'],
            [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4'],
            [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4'],
            [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4'],
            [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4'],
            [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4'],
            [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4'],
          ],
        },
      },
    ],
  };
};
