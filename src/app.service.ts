import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly db: PrismaService) {}

  getHealth() {
    return {
      status: 'ok',
    };
  }
}
