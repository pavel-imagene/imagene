import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Dataset, Prisma } from '@prisma/client';

@Injectable()
export class DatasetService {
  constructor(private prisma: PrismaService) {}

  async dataset(
    datasetWhereUniqueInput: Prisma.DatasetWhereUniqueInput
  ): Promise<Dataset | null> {
    return this.prisma.dataset.findUnique({
      where: datasetWhereUniqueInput,
    });
  }

  async datasets(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DatasetWhereUniqueInput;
    where?: Prisma.DatasetWhereInput;
    orderBy?: Prisma.DatasetOrderByWithRelationInput;
  }): Promise<Dataset[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.dataset.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createDataset(data: Prisma.DatasetCreateInput): Promise<Dataset> {
    return this.prisma.dataset.create({
      data,
    });
  }

  async updateDataset(params: {
    where: Prisma.DatasetWhereUniqueInput;
    data: Prisma.DatasetUpdateInput;
  }): Promise<Dataset> {
    const { data, where } = params;
    return this.prisma.dataset.update({
      data,
      where,
    });
  }

  async deleteDataset(where: Prisma.DatasetWhereUniqueInput): Promise<Dataset> {
    return this.prisma.dataset.delete({
      where,
    });
  }
}
