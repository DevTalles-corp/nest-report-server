import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';
import { getHelloWorldReport } from 'src/reports';

@Injectable()
export class StoreReportsService {
  constructor(private readonly printerService: PrinterService) {}

  async getOrderByIdReport(orderId: string) {
    const docDefinition = getHelloWorldReport({
      name: `Fernando Herrera ${orderId} `,
    });

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }
}
