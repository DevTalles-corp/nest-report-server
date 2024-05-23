import type { TDocumentDefinitions } from 'pdfmake/interfaces';
import { getDonutChart } from './charts/donut.chart';

interface TopCountry {
  country: string;
  customers: number;
}

interface ReportOptions {
  title?: string;
  subTitle?: string;
  topCountries: TopCountry[];
}

export const getStatisticsReport = async (
  options: ReportOptions,
): Promise<TDocumentDefinitions> => {
  const donutChart = await getDonutChart({
    entries: options.topCountries.map((c) => ({
      label: c.country,
      value: c.customers,
    })),
    position: 'left',
  });

  const docDefinition: TDocumentDefinitions = {
    content: [
      {
        columns: [
          {
            stack: [
              {
                text: '10 países con más clientes',
                alignment: 'center',
                margin: [0, 0, 0, 10],
              },
              {
                image: donutChart,
                width: 320,
              },
            ],
          },
          {
            layout: 'lightHorizontalLines',
            width: 'auto',
            table: {
              headerRows: 1,
              widths: [100, 'auto'],
              body: [
                ['País', 'Clientes'],
                ...options.topCountries.map((c) => [c.country, c.customers]),
              ],
            },
          },
        ],
      },
    ],
  };

  return docDefinition;
};
