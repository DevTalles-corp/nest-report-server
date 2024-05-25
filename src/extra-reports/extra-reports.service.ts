import fs from 'fs';

import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';

import { getHtmlContent } from 'src/helpers/html-to-pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from 'src/reports/sections/header.section';
import { footerSection } from 'src/reports/sections/footer.section';
import { getCommunityReport } from 'src/reports';

@Injectable()
export class ExtraReportsService {
  constructor(private readonly printerService: PrinterService) {}

  getHtmlReport() {
    const html = fs.readFileSync('src/reports/html/basic-03.html', 'utf8');

    const content = getHtmlContent(html, {
      client: 'Fernando Herrera',
      title: 'Curso de Node.js',
    });

    const docDefinition: TDocumentDefinitions = {
      pageMargins: [40, 110, 40, 60],
      header: headerSection({
        title: 'HTML to PDFMake',
        subTitle: 'Convertir HTML a PDFMake',
      }),
      footer: footerSection,
      content: content,
    };

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }

  getCommunity() {
    const docDefinition = getCommunityReport();

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }

  getCustomSize() {
    const doc = this.printerService.createPdf({
      // pageSize: 'TABLOID',
      pageSize: {
        width: 150,
        height: 300,
      },
      content: [
        {
          qr: 'https://devtalles.com',
          fit: 100,
          alignment: 'center',
        },
        {
          text: 'Reporte con tamaño',
          fontSize: 10,
          alignment: 'center',
          margin: [0, 20],
        },
      ],
    });

    return doc;
  }
}
