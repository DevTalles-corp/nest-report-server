import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import {
  getBasicChartSvgReport,
  getStatisticsReport,
  orderByIdReport,
} from 'src/reports';

@Injectable()
export class StoreReportsService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    // console.log('Connected to the database');
  }

  constructor(private readonly printerService: PrinterService) {
    super();
  }

  async getOrderByIdReport(orderId: number) {
    const order = await this.orders.findUnique({
      where: {
        order_id: orderId,
      },
      include: {
        customers: true,
        order_details: {
          include: {
            products: true,
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException(`Order with id ${orderId} not found`);
    }

    const docDefinition = orderByIdReport({
      data: order as any,
    });

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }

  async getSvgChart() {
    const docDefinition = await getBasicChartSvgReport();

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }

  async getStatistics() {
    const topCountries = await this.customers.groupBy({
      by: ['country'],
      _count: true,
      orderBy: {
        _count: {
          country: 'desc',
        },
      },
      take: 10,
    });

    const topCountryData = topCountries.map(({ country, _count }) => ({
      country: country,
      customers: _count,
    }));

    const docDefinition = await getStatisticsReport({
      topCountries: topCountryData,
    });

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }
}
