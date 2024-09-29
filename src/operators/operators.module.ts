import { Module } from '@nestjs/common';
import { OperatorsController } from './operators/operators.controller';
import { OperatorsService } from './operators/operators.service';

@Module({
  controllers: [OperatorsController],
  providers: [OperatorsService]
})
export class OperatorsModule {}
