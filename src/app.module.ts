import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [TicketsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
