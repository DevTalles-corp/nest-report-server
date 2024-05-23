import { Controller, Get, Param, Res } from '@nestjs/common';
import { StoreReportsService } from './store-reports.service';
import { Response } from 'express';

@Controller('store-reports')
export class StoreReportsController {
  constructor(private readonly storeReportsService: StoreReportsService) {}

  @Get('orders/:orderId')
  async getOrderReport(
    @Res() response: Response,
    @Param('orderId') orderId: string,
  ) {
    const pdfDoc = await this.storeReportsService.getOrderByIdReport(+orderId);

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Order-Report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('svgs-charts')
  async getSvgChart(@Res() response: Response) {
    const pdfDoc = await this.storeReportsService.getSvgChart();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Svg-Chart-Report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('statistics')
  async statistics(@Res() response: Response) {
    const pdfDoc = await this.storeReportsService.getStatistics();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Statistics-Report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
