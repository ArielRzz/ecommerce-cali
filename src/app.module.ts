import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { OperatorsModule } from './operators/operators.module';
import { BuyersController } from './buyers/buyers/buyers.controller';
import { BuyersService } from './buyers/buyers/buyers.service';
import { BuyersModule } from './buyers/buyers/buyers.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [ProductsModule, OrdersModule, OperatorsModule, BuyersModule, CategoriesModule],
  controllers: [AppController, BuyersController],
  providers: [AppService, BuyersService],
})
export class AppModule {}
