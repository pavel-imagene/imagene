/* eslint-disable @typescript-eslint/naming-convention */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  DatasetModel,
  DatasetService,
  UserModel,
  UserService,
} from '@imagene/lib';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly datasetService: DatasetService
  ) {}

  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; email: string }
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get('user')
  async getUsers(): Promise<UserModel[]> {
    // return this.userService.users({
    //   where: { email: true },
    // });
    return this.userService.users({});
  }

  // @Get('dataset/:dataset_id')
  // async getDatasetById(
  //   @Param('dataset_id') dataset_id: string
  // ): Promise<DatasetModel> {
  //   return this.datasetService.dataset({ dataset_id: Number(dataset_id) });
  // }

  @Get('filtered-datasets/:searchString')
  async getFilteredDatasets(
    @Param('searchString') searchString: string
  ): Promise<DatasetModel[]> {
    return this.datasetService.datasets({
      where: {
        title: { contains: searchString },
      },
    });
  }

  @Post('dataset')
  async createDataset(
    @Body()
    datasetData: {
      title: string;
      userEmail: string;
    }
  ): Promise<DatasetModel> {
    const { title, userEmail } = datasetData;
    return this.datasetService.createDataset({
      title,
      // user: {
      //   connect: { email: userEmail },
      // },
    });
  }

  @Delete('dataset/:dataset_id')
  async deleteDataset(
    @Param('dataset_id') dataset_id: string
  ): Promise<DatasetModel> {
    return this.datasetService.deleteDataset({
      dataset_id: Number(dataset_id),
    });
  }
}
